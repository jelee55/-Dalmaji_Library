package com.dalmaji.app.bookDetail.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.dalmaji.app.bookDetail.dao.BookDetailDao;
import com.dalmaji.app.bookDetail.vo.BookDetailVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookDetailService {

	private final SqlSessionTemplate sst;
	private final BookDetailDao dao;
	
	public BookDetailVo detail(String bookNo) {
		return dao.detail(sst, bookNo);
	}
	
}
