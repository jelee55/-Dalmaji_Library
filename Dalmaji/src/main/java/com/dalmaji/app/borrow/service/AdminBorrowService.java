package com.dalmaji.app.borrow.service;

import org.springframework.stereotype.Service;

import com.dalmaji.app.borrow.dao.AdminBorrowDao;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminBorrowService {

	private final AdminBorrowDao dao;
}
