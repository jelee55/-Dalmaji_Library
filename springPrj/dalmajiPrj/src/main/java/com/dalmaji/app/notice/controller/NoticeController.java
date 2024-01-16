package com.dalmaji.app.notice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dalmaji.app.borrow.vo.AdminBorrowVo;
import com.dalmaji.app.notice.service.NoticeService;
import com.dalmaji.app.notice.vo.NoticeVo;
import com.dalmaji.app.page.vo.PageVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("notice")
@RequiredArgsConstructor
@CrossOrigin("*")
public class NoticeController {
	
	private final NoticeService service;
	
//	//공지사항 목록조회 (data+view)
//	@GetMapping("list")
//	public String list(Model model) {
//		
//		List<NoticeVo> voList = service.list();
//		model.addAttribute("noticeVoList" , voList);
//		
//		return "notice/list";
//	}
	
	//공지사항 목록조회 (data)
	@GetMapping("list")
	@ResponseBody
	public Map<String, Object> list (@RequestParam(defaultValue = "1") int currentPage) {
		int listCount = service.getTotalCount();
		int pageLimit = 5;
		int listLimit = 8;
		PageVo pvo = new PageVo(listCount, currentPage, pageLimit, listLimit);
		List<NoticeVo> voList = service.list(pvo);
		
		for( NoticeVo vo : voList) {
			System.out.println(vo);
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("voList", voList);
		map.put("pvo", pvo);
		return map;
	}
	
	//공지사항 상세조회
	@GetMapping("detail")
	public String detail(NoticeVo vo, Model model) {
		NoticeVo noticeVo = service.detail(vo);
		model.addAttribute("noticeVo", noticeVo);
		return "notice/detail";
	}

}
