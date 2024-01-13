package com.dalmaji.app.notice.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.dalmaji.app.notice.vo.AdminNoticeVo;

@Repository
public class AdminNoticeDao {
	
	//공지사항 작성
	public int insert(SqlSessionTemplate sst, AdminNoticeVo vo) {
		return sst.insert("AdminNoticeMapper.insert", vo);
	}

	//공지사항 목록조회
	public List<AdminNoticeVo> list(SqlSessionTemplate sst) {
		return sst.selectList("AdminNoticeMapper.list");
	}

	//공지사항 상세조회
	public AdminNoticeVo detail(SqlSessionTemplate sst, AdminNoticeVo vo) {
		return sst.selectOne("AdminNoticeMapper.detail", vo);
	}

	//공지사항 삭제
	public int delete(SqlSessionTemplate sst, AdminNoticeVo vo) {
		return sst.update("AdminNoticeMapper.delete", vo);
	}

	//공지사항 수정
	public int edit(SqlSessionTemplate sst, AdminNoticeVo vo) {
		return sst.update("AdminNoticeMapper.edit", vo);
	}

}
