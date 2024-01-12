package com.dalmaji.app.notice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.notice.service.AdminNoticeService;
import com.dalmaji.app.notice.vo.AdminNoticeVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping
@RequiredArgsConstructor
@CrossOrigin
public class AdminNoticeApiController {

private final AdminNoticeService service;
	
	//공지사항 목록 조회
	@GetMapping("admin/list")
	public List<AdminNoticeVo> list() {
		return service.list();
	}
	
	//공지사항 작성하기
	@PostMapping("admin/write")
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
	
}
