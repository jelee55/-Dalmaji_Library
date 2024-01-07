package com.dalmaji.app.notice.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.dalmaji.app.notice.vo.NoticeVo;

@Repository
public class NoticeDao {

	//공지사항 작성
	public int insert(SqlSessionTemplate sst, NoticeVo vo) {
		return sst.insert("NoticeMapper.insert", vo);
	}

	//공지사항 목록조회
	public List<NoticeVo> list(SqlSessionTemplate sst) {
		return sst.selectList("NoticeMapper.list");
	}

	//공지사항 상세조회
	public NoticeVo detail(SqlSessionTemplate sst, NoticeVo vo) {
		return sst.selectOne("NoticeMapper.detail", vo);
	}

	//공지사항 삭제
	public int delete(SqlSessionTemplate sst, NoticeVo vo) {
		return sst.update("NoticeMapper.delete", vo);
	}

	//공지사항 수정
	public int edit(SqlSessionTemplate sst, NoticeVo vo) {
		return sst.update("NoticeMapper.edit", vo);
	}

}
