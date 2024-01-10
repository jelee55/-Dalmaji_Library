package com.dalmaji.app.borrow.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.dalmaji.app.borrow.vo.AdminBorrowVo;

@Repository
public class AdminBorrowDao {

	public List<AdminBorrowVo> list(SqlSessionTemplate sst) {
		System.out.println("dao 호출");
		List<AdminBorrowVo> a = sst.selectList("AdminBorrowListMapper.list");
		System.out.println(a);
		return sst.selectList("AdminBorrowListMapper.list");
	}
	
	
	
}
