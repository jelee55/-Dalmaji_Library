package com.dalmaji.app.bookDetail.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.bookDetail.service.BookDetailService;
import com.dalmaji.app.bookDetail.vo.BookDetailVo;
import com.dalmaji.app.borrow.vo.BorrowVo;
import com.dalmaji.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("search/book")
public class BookDetailController {
	
	private final BookDetailService service;
	
	/**
	 * 책 번호에 따른 상세페이지
	 * 화면구현
	 * 
	 * @param bookNo
	 * @return
	 * @throws Exception
	 */
	@GetMapping("detail")
	public Map<String, Object> detail(@RequestParam String bookNo)throws Exception {
		
		BookDetailVo vo = service.detail(bookNo);
		
		if(vo == null) {
			throw new Exception("bookNo 못찾음...");
		}
		
		// 반납일자가 있는 경우 반영되도록
		BorrowVo borrowVo = service.dueDate(bookNo);
		
		// 로그인한 회원 정보 확인 (대출비번 확인용 + 대출버튼 노출용)
		//MemberVo memberVo = service.check(bookNo); 
		
		// 결과를 MAP에 담아 반환
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("vo", vo);
		map.put("borrowVo", borrowVo);
		
		System.out.println("vo 호출 ::: " + vo);
		System.out.println("bookNo 호출 ::: " + bookNo);
		
		return map;
	}
	

}//class
