package com.dalmaji.app.bookDetail.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.dalmaji.app.bookDetail.vo.BookDetailVo;

@Repository
public class BookDetailDao {

	public BookDetailVo detail(SqlSessionTemplate sst, BookDetailVo vo) {
		return sst.selectOne("BookDetailMapper.detail", vo);
	}

	
}
