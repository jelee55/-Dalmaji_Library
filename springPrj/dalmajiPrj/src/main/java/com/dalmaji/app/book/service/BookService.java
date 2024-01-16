package com.dalmaji.app.book.service;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.dalmaji.app.book.dao.BookDao;
import com.dalmaji.app.book.vo.BookVo;
import com.dalmaji.app.page.vo.PageVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookService {

	private final BookDao dao;
	private final SqlSessionTemplate sst;

	// 목록조회
	public List<BookVo> list(PageVo pvo) {
		return dao.list(sst, pvo);
	}

	// 총 게시글 수 가져오는 메소드
	public int getTotalCount() {
		return dao.getTotalCount(sst);
	}

	/*
	 * //검색 public BookVo detail(String keyword) { return dao.detail(sst,keyword); }
	 */
	// 수정
	public int edit(BookVo vo) {
		return dao.edit(sst, vo);
	}

	// 삭제
	public int delete(BookVo vo) {
		return dao.delete(sst, vo);
	}

	/*
	 * public List<BookVo> searchBooks(String keyword) { return dao }
	 */
}