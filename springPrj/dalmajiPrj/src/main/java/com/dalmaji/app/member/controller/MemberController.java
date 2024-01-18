package com.dalmaji.app.member.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dalmaji.app.member.service.MemberService;
import com.dalmaji.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("member")
@RequiredArgsConstructor
@CrossOrigin("*")
public class MemberController {
	
	private final MemberService service;
	
	//회원가입 (화면)
	@GetMapping("join")
	public String join() {
		return "member/join";
	}
	
	//회원가입
	@PostMapping("join")
	public Map<String, String> join(@RequestBody MemberVo vo) throws Exception {
			
			Thread.sleep(3000);
			
			System.out.println("fetch 통해서 받은 데이터 : " + vo);
			int result = service.join(vo);
			
			Map<String, String> map = new HashMap<String, String>();
			if(result == 1) {
				map.put("msg", "good");
			} else {
				map.put("msg", "bad");
			}
			
			return map;
		
	}
	
	
	//로그인
	@PostMapping("login")
	public Map<String, String> login(@RequestBody MemberVo vo, HttpSession session) throws Exception {
		System.out.println(vo);
		MemberVo loginMember = service.login(vo);
		
		session.setAttribute("loginMember", loginMember);
		session.setAttribute("alerMsg", "로그인 성공!");
		Map<String , String> map = new HashMap<>();
		map.put("msg", "good");
		if(loginMember == null) {
			map.put("msg", "bad");
		}
		return map;
			
	}
	
	
	//회원 정보 수정
	@PostMapping("edit")
	public String edit(@RequestBody MemberVo vo) throws Exception {
		int result = service.edit(vo);
		
		if(result != 1) {
			throw new Exception();
		}
		
		return "redirect:/home";
	}
	
	//회원 탈퇴
	@GetMapping("quit")                                       
	public String quit(MemberVo vo, HttpSession session) throws Exception {
		
		int result = service.quit(vo);
		
		if(result != 1) {
			throw new Exception();
		}
		
		session.removeAttribute("loginMember");
		session.setAttribute("alerMsg", "회원 탈퇴 완료");
		
		return "redirect:/home";
	}
	
	//회원 목록 조회
	@GetMapping("list")
	public String list(Model model) {
		
		List<MemberVo> voList = service.list();
		System.out.println(voList);
		
		model.addAttribute("memberVoList" , voList);
		
		return "member/list";
	}
	
	//로그아웃
	@GetMapping("logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/home";
	}

} //class