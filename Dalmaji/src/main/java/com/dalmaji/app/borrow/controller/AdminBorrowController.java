package com.dalmaji.app.borrow.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.borrow.service.AdminBorrowService;
import com.dalmaji.app.borrow.vo.AdminBorrowVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("admin/borrow")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AdminBorrowController {
	
	private final AdminBorrowService service;
	
	// 대출 리스트 화면
	@GetMapping("list")
	public List<AdminBorrowVo> list() {
		return service.list();
	}
	
	// 제한사항 상태 변경
	@PostMapping("list")
	public void list(String no) {
		
	}

}//class
