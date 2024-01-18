package com.dalmaji.app.bookDetail.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.dalmaji.app.bookDetail.dao.BookDetailDao;
import com.dalmaji.app.bookDetail.vo.BookDetailVo;
import com.dalmaji.app.borrow.vo.BorrowVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
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
	
}
