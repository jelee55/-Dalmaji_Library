package com.dalmaji.app.jee.conctroller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("jee")
public class JeeController {
	
	@GetMapping("dd")
	public String jee() {
		System.out.println("dd");
		return "dd";
	}

}
