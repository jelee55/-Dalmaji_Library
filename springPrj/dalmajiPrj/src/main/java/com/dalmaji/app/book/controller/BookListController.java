package com.dalmaji.app.book.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.book.service.BookService;
import com.dalmaji.app.book.vo.BookVo;
import com.dalmaji.app.borrow.vo.AdminBorrowVo;
import com.dalmaji.app.page.vo.PageVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("search")
@CrossOrigin("*")
@RequiredArgsConstructor
public class BookListController {

	private final BookService service;

	// 목록조회(no,제목,저자,발행처,발행년도,도서상태)
	@GetMapping("list")
	public Map<String, Object> list(@RequestParam(defaultValue = "1") int currentPage,
	                                @RequestParam(required = false) String title,
	                                @RequestParam(required = false) String author,
	                                @RequestParam(required = false) String company) {

	    // 검색 조건이 있는 경우 검색 결과에 대한 총 아이템 수를 가져옵니다.
	    int listCount = (title != null || author != null || company != null)
	                        ? service.getSearchTotalCount(title, author, company)
	                        : service.getTotalCount();
	    
	    int pageLimit = 5;
	    int listLimit = 8;
	    PageVo pvo = new PageVo(listCount, currentPage, pageLimit, listLimit);
	    
	    // 검색 조건이 있는 경우 검색 결과 목록을 가져옵니다.
	    List<BookVo> voList = (title != null || author != null || company != null)
	                            ? service.searchList(pvo, title, author, company)
	                            : service.list(pvo);

	    Map<String, Object> map = new HashMap<String, Object>();
	    map.put("voList", voList);
	    map.put("pvo", pvo);
	    return map;
	}


	// 검색(게시글 목록 조회)
	@GetMapping("detaillist")
	public List<BookVo> detail(BookVo vo, Model model) {
	    List<BookVo> bookVoList = service.detail(vo);
	    model.addAttribute("bookVoList", bookVoList);
	    return bookVoList;
	}
	
	// 도서 작성
	@PostMapping("write")
	public Map<String, String> write(@RequestBody BookVo vo, HttpSession session) {
		Map<String, String> map = new HashMap<String, String>();
		int result = service.insert(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		
		return map;
	}

	

	// 게시글 수정(제목,저자,이미지)
	@PostMapping("admin/edit")
	public String edit(BookVo vo) throws Exception {
		int result = service.edit(vo);
		if (result != 1) {
			throw new Exception();
		}
		return "redirect:/search/admin/detail?no=" + vo.getBookNo();
	}

	// 게시글 삭제(관리자만)
	@GetMapping("admin/delete")
	public String delete(BookVo vo) throws Exception {
		int result = service.delete(vo);
		if (result != 1) {
			throw new Exception();
		}
		return "redirect:/book/admin/list";
	}

}
