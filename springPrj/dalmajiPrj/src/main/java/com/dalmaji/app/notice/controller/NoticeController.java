package com.dalmaji.app.notice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dalmaji.app.borrow.vo.AdminBorrowVo;
import com.dalmaji.app.notice.service.NoticeService;
import com.dalmaji.app.notice.vo.AdminNoticeVo;
import com.dalmaji.app.notice.vo.NoticeVo;
import com.dalmaji.app.page.vo.PageVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("notice")
@RequiredArgsConstructor
@CrossOrigin("*")
public class NoticeController {
	
	private final NoticeService service;
	

	//공지사항 목록조회 (data)
//	@GetMapping("list")
//	@ResponseBody
//	public Map<String, Object> list (@RequestParam(defaultValue = "1") int currentPage) {
//		int listCount = service.getTotalCount();
//		int pageLimit = 5;
//		int listLimit = 8;
//		PageVo pvo = new PageVo(listCount, currentPage, pageLimit, listLimit);
//		List<NoticeVo> voList = service.list(pvo);
//		
//		//vo값 잘 담겨서 출력되는지 확인 작업
//		for( NoticeVo vo : voList) {
//			System.out.println(vo);
//		}
//		
//		//결과를 Map에 담아 반환
//		Map<String, Object> map = new HashMap<String, Object>();
//		map.put("voList", voList);
//		map.put("pvo", pvo);
//		return map;
//	}
	
	//공지사항 목록조회 (+검색)
	@GetMapping("list")
	@ResponseBody
	public Map<String, Object> list(
	        @RequestParam(defaultValue = "1") int currentPage,
	        @RequestParam(required = false) String type,
	        @RequestParam(required = false) String keyword
	) {
	    int pageLimit = 5;
	    int listLimit = 8;
	    List<AdminNoticeVo> voList;
	    PageVo pvo;

	    // 검색 조건이 있는 경우에만 검색 수행
	    if (type != null && keyword != null) {
	        int listCount = service.getTotalCountByKeyword(type, keyword);
	        voList = service.searchNoticeList(type, keyword, currentPage);
	        pvo = new PageVo(listCount, currentPage, pageLimit, listLimit);
	    } else {
	        int listCount = service.getTotalCount();
	        pvo = new PageVo(listCount, currentPage, pageLimit, listLimit);
	        voList = service.list(pvo);
	    }

	    // 결과를 Map에 담아 반환
	    Map<String, Object> map = new HashMap<>();
	    map.put("voList", voList);
	    map.put("pvo", pvo);
	    return map;
	}

	
	
//	//공지사항 상세조회
//	@GetMapping("detail")
//	public NoticeVo detail(NoticeVo vo) {
//		System.out.println(vo);
//		return service.detail(vo);
//	}
	
	// 공지사항 상세조회
	@GetMapping("detail")
	public String detail(NoticeVo vo) {
	    
		// 조회수 증가
	    service.increaseHitCount(vo);
	    
	    // 상세 정보 가져오기
	    NoticeVo noticeVo = service.detail(vo);
	    
	    return "notice/detail";
	}

	
	

}