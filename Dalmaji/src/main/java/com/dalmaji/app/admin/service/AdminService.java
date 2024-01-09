package com.dalmaji.app.admin.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.dalmaji.app.admin.dao.AdminDao;
import com.dalmaji.app.admin.vo.AdminVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminService {
	
	private final AdminDao dao;
	private final SqlSessionTemplate sst;

	//회원가입
	public int join(AdminVo vo) throws Exception {

		String id = vo.getId();
		if(id.length() < 4) {
			throw new Exception("아이디를 길게하세요");
		}
		if("admin".equalsIgnoreCase(id)) {
			throw new Exception("사용 불가능");
		}
		
		return dao.join(sst, vo);
	}
	
	//로그인
	public AdminVo login(AdminVo vo) {
		return dao.login(sst, vo);
	}

}
