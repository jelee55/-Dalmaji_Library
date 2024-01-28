package com.dalmaji.app.notice.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.dalmaji.app.notice.dao.AdminNoticeDao;
import com.dalmaji.app.notice.dao.NoticeDao;
import com.dalmaji.app.notice.vo.AdminNoticeVo;
import com.dalmaji.app.notice.vo.NoticeVo;
import com.dalmaji.app.page.vo.PageVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminNoticeService {
	
	private final AdminNoticeDao dao;
	private final SqlSessionTemplate sst;
	
	//공지사항 작성
		public int insert(AdminNoticeVo vo) {
			return dao.insert(sst, vo);
		}

		//공지사항 목록조회
		public List<AdminNoticeVo> list(PageVo pvo) {
			return dao.list(sst, pvo);
		}

		//공지사항 상세조회
		public AdminNoticeVo detail(AdminNoticeVo vo) {
			return dao.detail(sst, vo);
		}

		//공지사항 삭제
		public int delete(AdminNoticeVo vo) {
			return dao.delete(sst ,vo);
		}

		//공지사항 수정
		public int edit(AdminNoticeVo vo) {
			return dao.edit(sst, vo);
		}

		//총 게시글 수 가져오는 메소드
		public int getTotalCount() {
			return dao.getTotalCount(sst);
		}

}