package com.dalmaji.app.borrow.vo;

import lombok.Data;

@Data
public class BorrowVo {
	
	private String borrowNo;
	private String bookNo;
	private String memberNo;
	private String borrowDate;
	private String dueDate;
	private String renew;
	
}
