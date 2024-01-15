package com.dalmaji.app.borrow.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.borrow.service.AdminBorrowService;
import com.dalmaji.app.borrow.vo.AdminBorrowVo;
import com.dalmaji.app.page.vo.PageVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("admin/borrow")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AdminBorrowController {
	
	private final AdminBorrowService service;
	
	// 대출 리스트 화면
	@GetMapping("list")
	public Map<String, Object> list(@RequestParam(defaultValue = "1") int currentPage) {
		int listCount = service.getTotalCount();
		int pageLimit = 5;
		int listLimit = 8;
		PageVo pvo = new PageVo(listCount, currentPage, pageLimit, listLimit);
		List<AdminBorrowVo> voList = service.list(pvo);
	
		for( AdminBorrowVo vo : voList) {
			System.out.println(vo);
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("voList", voList);
		map.put("pvo", pvo);
		return map;
	}
	
	// 대출 제한 상태 변경
	@PostMapping("edit")
	public String edit (@RequestBody AdminBorrowVo vo) throws Exception {
		System.out.println("memberNo:::" + vo.getMemberNo());
		System.out.println("oNo:::" + vo.getONo());
		int result = service.edit(vo);
		System.out.println("vo 출력하기" + vo);
		if(result != 1) {
			throw new Exception();
		}
		return "/admin/borrow/list";
	}

}//class
