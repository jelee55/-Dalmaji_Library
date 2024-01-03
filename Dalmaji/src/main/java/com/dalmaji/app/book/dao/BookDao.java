package com.dalmaji.app.book.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.dalmaji.app.book.vo.BookVo;

@Repository
public class BookDao {

	//목록조회
	public List<BookVo> list(SqlSessionTemplate sst) {
		return sst.selectList("BookMapper.insert");
	}

	//검색
	public BookVo detail(SqlSessionTemplate sst, BookVo vo) {
		return sst.selectOne("BookMapper.detail",vo);
	}

	//수정
	public int edit(SqlSessionTemplate sst, BookVo vo) {
		return sst.update("BookMapper.edit" , vo);

	}

	//삭제
	public int delete(SqlSessionTemplate sst, BookVo vo) {
		return sst.update("BookMapper.delete", vo);
	}

}
