package com.dalmaji.app.borrow.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.dalmaji.app.borrow.dao.AdminBorrowDao;
import com.dalmaji.app.borrow.vo.AdminBorrowVo;
import com.dalmaji.app.page.vo.PageVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminBorrowService {

	private final AdminBorrowDao dao;
	private final SqlSessionTemplate sst;

	public List<AdminBorrowVo> list(PageVo pvo) {
		return dao.list(sst, pvo);
	}

	//총 게시글 수 가져오는 메소드
	public int getTotalCount() {
		return dao.getTotalCount(sst);
	}
}
