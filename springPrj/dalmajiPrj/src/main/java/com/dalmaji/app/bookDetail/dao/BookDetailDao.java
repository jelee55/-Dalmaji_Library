package com.dalmaji.app.bookDetail.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.dalmaji.app.bookDetail.vo.BookDetailVo;
import com.dalmaji.app.borrow.vo.BorrowVo;
import com.dalmaji.app.member.vo.MemberVo;

@Repository
public class BookDetailDao {

	// 책 번호에 따른 상세페이지 화면구현
	public BookDetailVo detail(SqlSessionTemplate sst, String bookNo) {
		return sst.selectOne("BookDetailMapper.detail", bookNo);
	}

	// 반납일자가 있는 경우 반영되도록
	public BorrowVo dueDate(SqlSessionTemplate sst, String bookNo) {
		return sst.selectOne("BookDetailMapper.dueDate", bookNo);
	}

	// 대출 비밀번호 일치여부 확인 & 대출완료
	public MemberVo check(SqlSessionTemplate sst, String borrowPwd) {
		return sst.selectOne("BookDetailMapper.check", borrowPwd);
	}
	
	// 대출완료(책 상태변경)
	public int borrowOk(SqlSessionTemplate sst, String bookNo) {
		return sst.update("BookDetailMapper.borrowOk", bookNo);
	}

}
