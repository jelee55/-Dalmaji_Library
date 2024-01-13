package com.dalmaji.app.notice.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.notice.service.AdminNoticeService;
import com.dalmaji.app.notice.service.NoticeService;
import com.dalmaji.app.notice.vo.AdminNoticeVo;
import com.dalmaji.app.notice.vo.NoticeVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("admin/notice")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AdminNoticeController {
	
	private final AdminNoticeService service;
	
	//공지사항 작성
	@PostMapping("insert")
	public String insert(AdminNoticeVo vo) throws Exception {
		
		int result = service.insert(vo);
		
		if(result != 1) {
			throw new Exception();
		}
		
		return "redirect:/admin/notice/list";
	}
	
	//공지사항 목록조회 (data+view)
//	@GetMapping("list")
//	public String list(Model model) {
//		
//		List<AdminNoticeVo> voList = service.list();
//		model.addAttribute("AdminNoticeVoList" , voList);
//		
//		return "admin/notice/list";
//	}
	
	//공지사항 목록조회 (data)
	@GetMapping("list")
	public List<AdminNoticeVo> restList(){
		return service.list();
		
	}
	
	//공지사항 상세조회
	@GetMapping("admin/detail")
	public String detail(AdminNoticeVo vo, Model model) {
		AdminNoticeVo adminNoticeVo = service.detail(vo);
		model.addAttribute("noticeVo", adminNoticeVo);
		return "admin/notice/detail";
	}
	
	//공지사항 삭제 (번호)
	@GetMapping("delete")
	public String delete(AdminNoticeVo vo) throws Exception {
		int result = service.delete(vo);
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/admin/notice/list";
	}
	
	//공지사항 수정 (제목, 내용)
	@PostMapping("edit")
	public String edit(AdminNoticeVo vo) throws Exception {
		int result = service.edit(vo);
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/admin/notice/detail?no=" + vo.getNo();
	}

}
