package com.dalmaji.app.bookDetail.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
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
	public String detail(BookDetailVo vo, Model model) {
		BookDetailVo bookDetailVo = service.detail(vo);
		model.addAttribute("bookDetailVo", bookDetailVo);
		return "search/book/detail";
		
	}

}
