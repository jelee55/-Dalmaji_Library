package com.dalmaji.app.borrow.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.borrow.service.AdminBorrowService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("admin/borrow")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AdminBorrowController {
	
	private final AdminBorrowService service;

}
