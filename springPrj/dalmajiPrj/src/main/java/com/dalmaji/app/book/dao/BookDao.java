package com.dalmaji.app.book.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.dalmaji.app.book.vo.BookVo;
import com.dalmaji.app.borrow.vo.AdminBorrowVo;
import com.dalmaji.app.page.vo.PageVo;

@Repository
public class BookDao {

	// 목록조회
	public List<BookVo> list(SqlSessionTemplate sst, PageVo pvo) {
		System.out.println("dao 호출");

		int offset = (pvo.getCurrentPage() - 1) * pvo.getListLimit(); // 몇 개 건너뛸지...
		int limit = 8; // 최대 몇개 보일지...
		RowBounds rb = new RowBounds(offset, limit); // 0개를 건너뛰고, 그 다음부터 10개를 조회할 예정...

		System.out.println("limit 출력 ::: " + rb);

		return sst.selectList("BookMapper.list", null, rb);
	}

	
	// 카테고리별 도서 목록 가져오기
    public List<BookVo> getBookListByBookCate(int bookCateNo, SqlSessionTemplate sst) {
        return sst.selectList("BookMapper.listSelect", bookCateNo);
    }
	
	// 총 게시글 수 가져오는 메소드
	public int getTotalCount(SqlSessionTemplate sst) {
		// 우리가 필요한것은 숫자라 string타입을 숫자타입으로 변경해서 리턴해야한다!!
		return Integer.parseInt(sst.selectOne("BookMapper.count"));
	}
	
	// 검색에 대한 총 게시글 수 조회
	public int getSearchTotalCount(SqlSessionTemplate sst, String title, String author, String company) {
	    Map<String, Object> map = new HashMap<>();
	    map.put("title", title);
	    map.put("author", author);
	    map.put("company", company);
	    return sst.selectOne("BookMapper.getSearchTotalCount", map);
	}

	//검색(목록 상세 조히)
	public List<BookVo> detail(SqlSessionTemplate sst, BookVo vo) {
	    return sst.selectList("BookMapper.detail", vo);
	}


	// 수정
	public int edit(SqlSessionTemplate sst, BookVo vo) {
		return sst.update("BookMapper.edit", vo);

	}

	// 삭제
	public int delete(SqlSessionTemplate sst, BookVo vo) {
		return sst.update("BookMapper.delete", vo);
	}

	


	// 검색 결과 목록 조회
	public List<BookVo> searchList(SqlSessionTemplate sst, PageVo pvo, String title, String author, String company) {
	    Map<String, Object> map = new HashMap<>();
	    map.put("title", title);
	    map.put("author", author);
	    map.put("company", company);
	    map.put("startRow", pvo.getStartRow());
	    map.put("listLimit", pvo.getListLimit());
	    return sst.selectList("BookMapper.searchList", map);
	}

	

}
