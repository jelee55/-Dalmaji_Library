package com.dalmaji.app.notice.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.dalmaji.app.notice.vo.NoticeVo;

@Repository
public class NoticeDao {


	//공지사항 목록조회
	public List<NoticeVo> list(SqlSessionTemplate sst) {
		List<NoticeVo> noticeVo = sst.selectList("NoticeMapper.list");
		return sst.selectList("NoticeMapper.list");
	}

	//공지사항 상세조회
	public NoticeVo detail(SqlSessionTemplate sst, NoticeVo vo) {
		return sst.selectOne("NoticeMapper.detail", vo);
	}

}
