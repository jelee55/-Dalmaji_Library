package com.dalmaji.app.borrow.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.dalmaji.app.borrow.vo.AdminBorrowVo;

@Repository
public class AdminBorrowDao {

	public List<AdminBorrowVo> list(SqlSessionTemplate sst) {
		return sst.selectList("");
	}
	
}
