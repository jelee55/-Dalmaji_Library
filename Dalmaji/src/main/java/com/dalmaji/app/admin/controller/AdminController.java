package com.dalmaji.app.admin.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dalmaji.app.admin.service.AdminService;
import com.dalmaji.app.admin.vo.AdminVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("admin")
@RequiredArgsConstructor
public class AdminController {
	
	private final AdminService service;
	
	//로그인
	@PostMapping("login")
	public String login(AdminVo vo, HttpSession session) throws Exception {
		
		AdminVo loginAdmin = service.login(vo);
		
		if(loginAdmin == null) {
			throw new Exception("로그인 실패");
		}
		
		session.setAttribute("loginMember", loginAdmin);
		session.setAttribute("alerMsg", "로그인 성공!");
		
		return "redirect:/home";
	}
	
	//로그아웃
	@GetMapping("logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/home";
	}

}
