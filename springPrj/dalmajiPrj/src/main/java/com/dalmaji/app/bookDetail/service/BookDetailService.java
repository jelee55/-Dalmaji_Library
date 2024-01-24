package com.dalmaji.app.bookDetail.service;

import java.util.HashMap;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dalmaji.app.bookDetail.dao.BookDetailDao;
import com.dalmaji.app.bookDetail.vo.BookDetailVo;
import com.dalmaji.app.borrow.vo.BorrowVo;
import com.dalmaji.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class BookDetailService {

	private final SqlSessionTemplate sst;
	private final BookDetailDao dao;
	
	// 책 번호에 따른 상세페이지 화면구현
	public BookDetailVo detail(String bookNo) {
		return dao.detail(sst, bookNo);
	}

	// 반납일자가 있는 경우 반영되도록
	public BorrowVo dueDate(String bookNo) {
		return dao.dueDate(sst, bookNo);
	}

	// 대출 비밀번호 일치여부 확인 & 대출완료
	public Map<String, Object> check(MemberVo mvo,String bookNo) throws Exception {
		
		Map<String,Object> resultMap = new HashMap();
		
		resultMap.put("status", "bad");
		
		if(dao.check(sst, mvo) != null) {
		}else {
			resultMap.put("msg","잘못된 비밀번호 입니다");
			return resultMap;
		}
		
		int result = dao.updateBookState(sst, bookNo);
		
		if(result!=1) {
			return resultMap; 
		}
		result = dao.insertBorrow(sst, bookNo);
		
		if(result!=1) {
			throw new Exception("실패");
		}
		
		resultMap.put("status", "good");
		
		return resultMap;
		
	}
	
//	// 대출중 상태로 책 상태 변경하기(update)
//	public int updateBookState(String bookNo) {
//		return 
//	}
//
//	// 대출완료처리 (borrow table에 insert)
//	public int insertBorrow(String bookNo) {
//		return dao.insertBorrow(sst, bookNo);
//	}
	
}
