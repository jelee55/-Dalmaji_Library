package com.dalmaji.app.book.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.book.service.BookService;
import com.dalmaji.app.book.vo.BookVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("search")
@CrossOrigin("*")
@RequiredArgsConstructor
public class BookListController {
	
	private final BookService service;
	
	//목록조회(no,제목,저자,발행처,발행년도,도서상태)
	@GetMapping("list")
	public List<BookVo>list(){
		return service.list();
	}
	
	/*
	 * //검색(제목 or 저자 or 출판사)
	 * 
	 * @GetMapping("detail") public List<BookVo> detail(@RequestParam("검색어") String
	 * keyword) { return service.detail(keyword); }
	 */
	
	//게시글 수정(제목,저자,이미지)
	@PostMapping("admin/edit")
	public String edit(BookVo vo) throws Exception {
		int result = service.edit(vo);
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/search/admin/detail?no=" + vo.getBookNo();
	}
	
	//게시글 삭제(관리자만)
	@GetMapping("admin/delete")
	public String delete(BookVo vo) throws Exception {
		int result = service.delete(vo);
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/book/admin/list";
	}
	

}
