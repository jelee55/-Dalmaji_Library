package com.dalmaji.app.bookDetail.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	
	// 대출 비밀번호 일치여부 확인 & 대출완료
	@PostMapping("check")
	public Map<String, Object> check (@RequestBody Map<String, String> requestData) throws Exception{
		
		// 클라이언트에서 전달받은 책 번호와 대출 비밀번호 추출
		String bookNo = requestData.get("bookNo");
		String borrowPwd = requestData.get("borrowPwd");
		
		// 대출 비밀번호 확인을 위해 서비스 계층에서 해당 멤버 정보를 조회
		MemberVo loginMember = service.check(borrowPwd);
		log.info("borrowPwd" + borrowPwd);
		log.info("loginMember" + loginMember);
		
		// 응답을 위한 Map 객체 생성
		Map<String, Object> map = new HashMap<>();
		
		// 조회된 유저의 대출 비밀번호와 클라이언트에서 전달받은 대출 비밀번호 비교
		if(loginMember.getBorrowPwd().equals(requestData.get("borrowPwd"))) {
			int result = service.borrowOk(bookNo);
			log.info("bookNo:::" + bookNo);
			log.info("result:::" + result);
			map.put("msg", "success");
		}else {
			map.put("msg", "fail");
		}
		
		return map;
		
	}
	

}//class
