package com.dalmaji.app.notice.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.dalmaji.app.notice.dao.NoticeDao;
import com.dalmaji.app.notice.vo.NoticeVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NoticeService {
	
	private final NoticeDao dao;
	private final SqlSessionTemplate sst;

	//공지사항 작성
	public int insert(NoticeVo vo) {
		return dao.insert(sst, vo);
	}

	//공지사항 목록조회
	public List<NoticeVo> list() {
		return dao.list(sst);
	}

	//공지사항 상세조회
	public NoticeVo detail(NoticeVo vo) {
		return dao.detail(sst, vo);
	}

	//공지사항 삭제
	public int delete(NoticeVo vo) {
		return dao.delete(sst ,vo);
	}

	//공지사항 수정
	public int edit(NoticeVo vo) {
		return dao.edit(sst, vo);
	}

}
