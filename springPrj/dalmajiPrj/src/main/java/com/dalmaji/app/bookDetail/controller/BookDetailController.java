package com.dalmaji.app.bookDetail.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("search/book")
@Slf4j
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
		
		// 결과를 MAP에 담아 반환
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("vo", vo);
		map.put("borrowVo", borrowVo);
		
		System.out.println("vo 호출 ::: " + vo);
		System.out.println("bookNo 호출 ::: " + bookNo);
		System.out.println("borrowVo 호출 ::: " + borrowVo);
		
		return map;
	}
	
	/**
	 * 대출 비밀번호 일치여부 확인 & 대출완료
	 * 
	 * @param mvo
	 * @return
	 * @throws Exception
	 */
	@PostMapping("check")
	public Map<String, Object> check (@RequestBody MemberVo mvo) throws Exception{
		log.info("들어온 mvo :::{}",mvo);
		
		
		String bookNo = (mvo.getBookNo());
		
		
		Map<String,Object> resultMap = new HashMap();
		try {
		log.info("mvo::: " + mvo);
		
		
		// 대출 비밀번호 일치여부 확인
		resultMap = service.check(mvo, bookNo);
		}catch(Exception e) {
			resultMap.put("msg",e.getMessage());
		}
	
		return resultMap;
	}
	
//	// 대출중 상태로 책 상태 변경하기(update)
//	@PostMapping("update")
//	public Map<String, String> updateBookState (@RequestBody MemberVo mvo, @RequestParam String bookNo){
//		
//		// bookNo 정보는 세션에서 가져온 데이터로 채움
//		mvo.setBookNo(bookNo);
//		
//		Map<String, String> map = new HashMap<String, String>();
//		
//		// 대출중 상태로 책 상태 변경하기(update)
//		int updateResult = service.updateBookState(bookNo);
//		log.info("bookNo대출상태 변경용::: " + bookNo);
//		log.info("updateResult::: " + updateResult);
//		
//		if(updateResult == 1) {
//			map.put("msg", "good");
//		}else {
//			map.put("msg", "bad");
//		}
//		
//		return map;
//	}
//	
//	// 대출완료처리 (borrow table에 insert)
//	@PostMapping("insert")
//	public Map<String, String> insertBorrow (@RequestBody MemberVo mvo, @RequestParam String bookNo){
//		
//		// bookNo 정보는 세션에서 가져온 데이터로 채움
//		mvo.setBookNo(bookNo);
//		
//		Map<String, String> map = new HashMap<String, String>();
//		
//		int insertResult = service.insertBorrow(bookNo);
//		log.info("insertResult::: " + insertResult);
//		
//		if(insertResult == 1) {
//			map.put("msg", "good");
//		}else {
//			map.put("msg", "bad");
//		}
//		return map;
//	}

}//class
