package com.dalmaji.app.ouj.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("ouj")
public class OujController {

	@GetMapping("login")
	public String login() {
		return "안녕하세요";
	}
}
