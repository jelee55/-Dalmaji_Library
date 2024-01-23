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

import com.dalmaji.app.notice.service.AdminNoticeService;
import com.dalmaji.app.notice.service.NoticeService;
import com.dalmaji.app.notice.vo.AdminNoticeVo;
import com.dalmaji.app.notice.vo.NoticeVo;
import com.dalmaji.app.page.vo.PageVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("admin/notice")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AdminNoticeController {
	
	private final AdminNoticeService service;
	
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
	@ResponseBody
	public Map<String, Object> list (@RequestParam(defaultValue = "1") int currentPage) {
		int listCount = service.getTotalCount();
		int pageLimit = 5;
		int listLimit = 8;
		PageVo pvo = new PageVo(listCount, currentPage, pageLimit, listLimit);
		List<AdminNoticeVo> voList = service.list(pvo);
		
		//vo값 잘 담겨서 출력되는지 확인 작업
		for( AdminNoticeVo vo : voList) {
			System.out.println(vo);
		}
		
		//결과를 Map에 담아 반환
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("voList", voList);
		map.put("pvo", pvo);
		return map;
	}
	
	//공지사항 상세조회
	@GetMapping("detail")
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
	public Map<String, String> edit(@RequestBody AdminNoticeVo vo, HttpSession session) {
		Map<String, String> map = new HashMap<String, String>();
		int result = service.edit(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		
		return map;
	}
	
	
//	@PostMapping("edit")
//	public String edit(AdminNoticeVo vo) throws Exception {
//		int result = service.edit(vo);
//		if(result != 1) {
//			throw new Exception();
//		}
//		return "redirect:/admin/notice/detail?no=" + vo.getNo();
//	}

}