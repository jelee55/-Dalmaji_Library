package com.dalmaji.app.notice.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.dalmaji.app.notice.vo.AdminNoticeVo;
import com.dalmaji.app.page.vo.PageVo;

@Repository
public class AdminNoticeDao {
	
	private static final int PAGE_SIZE = 0;

	//공지사항 작성
	public int insert(SqlSessionTemplate sst, AdminNoticeVo vo) {
		return sst.insert("AdminNoticeMapper.insert", vo);
	}

	//공지사항 목록조회
	public List<AdminNoticeVo> list(SqlSessionTemplate sst, PageVo pvo) {
		System.out.println("dao 호출");
		
		int offset = (pvo.getCurrentPage()-1) * pvo.getListLimit();   // 몇 개 건너뛸지... 
		int limit = 8;   // 최대 몇개 보일지...
		RowBounds rb = new RowBounds(offset, limit);       // 0개를 건너뛰고, 그 다음부터 10개를 조회할 예정...
		
		System.out.println("limit 출력 ::: " +rb);
		
		return sst.selectList("AdminNoticeListMapper.list", null , rb);
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

	//총 게시글 수 가져오는 메소드
	public int getTotalCount(SqlSessionTemplate sst) {
		// 우리가 필요한것은 숫자라 string타입을 숫자타입으로 변경해서 리턴해야한다!!
		return Integer.parseInt(sst.selectOne("AdminNoticeMapper.count"));
	}
	
	//키워드 검색
	public int getTotalCountByKeyword(SqlSessionTemplate sst, String type, String keyword) {
	    Map<String, Object> parameter = new HashMap<>();
	    parameter.put("type", type);
	    parameter.put("keyword", keyword);
	    return sst.selectOne("AdminNoticeMapper.getTotalCountByKeyword", parameter);
	}

	public List<AdminNoticeVo> searchNoticeList(SqlSessionTemplate sst, String type, String keyword, int currentPage) {
	    Map<String, Object> parameter = new HashMap<>();
	    parameter.put("type", type);
	    parameter.put("keyword", keyword);
	    parameter.put("startRow", (currentPage - 1) * PAGE_SIZE); // 페이지네이션을 위한 시작 행 계산

	    return sst.selectList("AdminNoticeMapper.searchNoticeList", parameter);
	}



	
}