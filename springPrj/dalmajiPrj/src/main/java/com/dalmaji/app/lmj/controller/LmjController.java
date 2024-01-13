package com.dalmaji.app.lmj.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LmjController {

	@GetMapping("test")
	public String test() {

		return "hello";
	}
}
