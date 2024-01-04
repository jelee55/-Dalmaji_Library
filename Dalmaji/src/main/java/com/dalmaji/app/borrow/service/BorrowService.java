package com.dalmaji.app.borrow.service;

import org.springframework.stereotype.Service;

import com.dalmaji.app.borrow.dao.BorrowDao;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BorrowService {
	
	private final BorrowDao dao;

}
