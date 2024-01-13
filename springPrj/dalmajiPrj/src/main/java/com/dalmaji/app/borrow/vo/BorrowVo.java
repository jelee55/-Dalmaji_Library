package com.dalmaji.app.borrow.vo;

import lombok.Data;

@Data
public class BorrowVo {
	
	private String bookNo;
	private String title;
	private String author;
	private String company;
	private String memberNo;
	private String name;
	private String borrowDate;
	private String dueDate;
	private String overdueCnt;
	private String statusNow;
	private String restriction;
	
}
