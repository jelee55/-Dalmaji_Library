package com.dalmaji.app.notice.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dalmaji.app.notice.service.NoticeService;
import com.dalmaji.app.notice.vo.NoticeVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("notice")
@RequiredArgsConstructor
public class NoticeController {
	
	private final NoticeService service;
	
	//공지사항 목록조회 (data+view)
	@GetMapping("list")
	public String list(Model model) {
		
		List<NoticeVo> voList = service.list();
		model.addAttribute("noticeVoList" , voList);
		
		return "notice/list";
	}
	
	//공지사항 목록조회 (data)
	@GetMapping
	@ResponseBody
	public List<NoticeVo> restList(){
		List<NoticeVo> voList = service.list();
		return voList;
	}
	
	//공지사항 상세조회
	@GetMapping("detail")
	public String detail(NoticeVo vo, Model model) {
		NoticeVo noticeVo = service.detail(vo);
		model.addAttribute("noticeVo", noticeVo);
		return "notice/detail";
	}

}
