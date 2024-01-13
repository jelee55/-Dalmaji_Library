package com.dalmaji.app.borrow.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.borrow.service.BorrowService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
public class BorrowController {
	
	private final BorrowService service;
	
	@PostMapping("/")
	public void borrow(){
		
	}

}
