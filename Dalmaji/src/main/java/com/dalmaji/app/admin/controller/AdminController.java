package com.dalmaji.app.admin.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dalmaji.app.admin.service.AdminService;
import com.dalmaji.app.admin.vo.AdminVo;
import com.dalmaji.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("admin")
@RequiredArgsConstructor
public class AdminController {
	
	private final AdminService service;
	
	//관리자 회원가입 (화면)
	@GetMapping("adminjoin")
	public String join() {
		return "admin/adminjoin";
	}
	
	//회원가입
	@PostMapping("adminjoin")
	public String join(AdminVo vo) throws Exception {
		int result = service.join(vo);
		
		if(result != 1) {
			throw new Exception();
		}
		
		return "redirect:/home";	//회원가입 성공시 홈페이지로 redirect
	}
	
	//로그인
	@PostMapping("adminlogin")
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
	@GetMapping("adminlogout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/home";
	}

}
