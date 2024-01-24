package com.dalmaji.app.book.service;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.dalmaji.app.book.dao.BookDao;
import com.dalmaji.app.book.vo.BookVo;
import com.dalmaji.app.page.vo.PageVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookService {

	private final BookDao dao;
	private final SqlSessionTemplate sst;

	// 목록조회
	public List<BookVo> list(PageVo pvo) {
		return dao.list(sst, pvo);
	}
	
	 public List<BookVo> getBookListByBookCate(int bookCateNo) {
	        return dao.getBookListByBookCate(bookCateNo, sst);
	    }
	
    // 총 게시글 수 가져오는 메소드
    public int getTotalCount() {
        return dao.getTotalCount(sst);
    }

	// 검색에 대한 총 게시글 수 가져오는 메소드
	public int getSearchTotalCount(String title, String author, String company) {
	    return dao.getSearchTotalCount(sst, title, author, company);
	}

	// 검색 결과 목록 조회
	public List<BookVo> searchList(PageVo pvo, String title, String author, String company) {
	    return dao.searchList(sst, pvo, title, author, company);
	}

	
	//검색(목록)
	public List<BookVo> detail(BookVo vo) {
	    return dao.detail(sst, vo);
	}
	
	
	// 수정
	public int edit(BookVo vo) {
		return dao.edit(sst, vo);
	}

	// 삭제
	public int delete(BookVo vo) {
		return dao.delete(sst, vo);
	}
	
	//도서 작성
	public int insert(BookVo vo) {
		return dao.insert(sst, vo);
	}

	

}