package com.dalmaji.app.notice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.book.vo.BookVo;
import com.dalmaji.app.bookDetail.vo.BookDetailVo;
import com.dalmaji.app.borrow.vo.BorrowVo;
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
	
//	//공지사항 작성	-> redirect는 리엑트 안됨
//	@PostMapping("write")
//	public String insert(AdminNoticeVo vo) throws Exception {
//		
//		int result = service.insert(vo);
//		
//		if(result != 1) {
//			throw new Exception();
//		}
//		
//		return "redirect:/admin/notice/list";	
//	}
	
	//공지사항 작성하기
	@PostMapping("write")
	public Map<String, String> write(@RequestBody AdminNoticeVo vo, HttpSession session) {
		Map<String, String> map = new HashMap<String, String>();
		int result = service.insert(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		
		return map;
	}
	
	//공지사항 목록조회 (data)
	@GetMapping("list")
	public List<AdminNoticeVo> restList(){
		return service.list();
		
	}
	
	//공지사항 상세조회 (번호)
	@GetMapping("detail")
	public Map<String, Object> detail(@RequestParam String no)throws Exception {
		
		AdminNoticeVo vo = service.detail(no);
		
		if(vo == null) {
			throw new Exception("noticeNo 못찾음...");
		}
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("vo", vo);
		
		System.out.println("vo 호출 ::: " + vo);
		System.out.println("noticeNo 호출 ::: " + no);
		
		return map;
	}
	
	//공지사항 수정(제목,저자,이미지)
	@PostMapping("edit")
	public String edit(AdminNoticeVo vo) throws Exception {
		int result = service.edit(vo);
		if (result != 1) {
			throw new Exception();
		}
		return "redirect:/admin/notice/detail?no=" + vo.getNo();
	}

	//공지사항 삭제(관리자만)
	@GetMapping("delete")
	public String delete(AdminNoticeVo vo) throws Exception {
		int result = service.delete(vo);
		if (result != 1) {
			throw new Exception();
		}
		return "redirect:/admin/notice/list";
	}
}
