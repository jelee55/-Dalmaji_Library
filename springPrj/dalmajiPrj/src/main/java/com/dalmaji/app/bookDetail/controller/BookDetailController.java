package com.dalmaji.app.bookDetail.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.bookDetail.service.BookDetailService;
import com.dalmaji.app.bookDetail.vo.BookDetailVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("search/book")
public class BookDetailController {
	
	private final BookDetailService service;
	
	@GetMapping("detail")
	public Map<String, Object> detail(@RequestBody BookDetailVo vo) {
		
		BookDetailVo detailVo = service.detail();
		Map<String, Object> map = new HashMap<>();
		map.put("vo", vo);
		
		System.out.println("detailVo 호출 ::: " + detailVo);
		System.out.println("vo 호출 ::: " + vo);
		
		return map;
	}

}
