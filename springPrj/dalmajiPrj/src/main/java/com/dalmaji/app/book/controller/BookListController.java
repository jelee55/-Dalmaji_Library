package com.dalmaji.app.book.controller;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dalmaji.app.book.service.BookService;
import com.dalmaji.app.book.vo.BookVo;
import com.dalmaji.app.borrow.vo.AdminBorrowVo;
import com.dalmaji.app.page.vo.PageVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("admin")
@CrossOrigin(origins ="*", allowedHeaders = "*")
@RequiredArgsConstructor
public class BookListController {

	private final BookService service;

	// 목록조회(no,제목,저자,발행처,발행년도,도서상태)
	@GetMapping("list")
	public Map<String, Object> list(@RequestParam(defaultValue = "1") int currentPage,
	                                @RequestParam(required = false) String title,
	                                @RequestParam(required = false) String author,
	                                @RequestParam(required = false) String company) {

	    // 검색 조건이 있는 경우 검색 결과에 대한 총 아이템 수를 가져옵니다.
	    int listCount = (title != null || author != null || company != null)
	                        ? service.getSearchTotalCount(title, author, company)
	                        : service.getTotalCount();
	    
	    int pageLimit = 5;
	    int listLimit = 8;
	    PageVo pvo = new PageVo(listCount, currentPage, pageLimit, listLimit);
	    
	    // 검색 조건이 있는 경우 검색 결과 목록을 가져옵니다.
	    List<BookVo> voList = (title != null || author != null || company != null)
	                            ? service.searchList(pvo, title, author, company)
	                            : service.list(pvo);

	    Map<String, Object> map = new HashMap<String, Object>();
	    map.put("voList", voList);
	    map.put("pvo", pvo);
	    return map;
	}


    // 카테고리별 도서 목록 가져오기
    @GetMapping("listByBookCate/{bookCateNo}")
    public List<BookVo> getBookListByBookCate(@PathVariable int bookCateNo) {
        return service.getBookListByBookCate(bookCateNo);
    }
	
    
    
	// 검색(게시글 목록 조회)
	@GetMapping("detaillist")
	public List<BookVo> detail(BookVo vo, Model model) {
	    List<BookVo> bookVoList = service.detail(vo);
	    model.addAttribute("bookVoList", bookVoList);
	    return bookVoList;
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 도서 작성
	@PostMapping("write")
	public Map<String, String> write( BookVo vo, MultipartFile f) throws Exception {
		
		System.out.println("vo : " + vo);
		System.out.println("f : " + f.getOriginalFilename());   
		
		String bookImg = saveFile(f);
		vo.setBookImg(bookImg);
		
		int result = service.write(vo);
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("msg", "good");
		if(result == 1) {
			map.put("msg", "bad");
		}
		
		return map;
	}
	
	/**
	 * 파일을 서버에 저장하고, 파일 전체 경로를 리턴함
	 * @param 파일객체 
	 * @param 파일경로
	 * @return 실제파일저장경로(파일경로+파일명)
	 * @throws Exception
	 * @throws  
	 */
	private String saveFile(MultipartFile f) throws Exception {
		String path = "C:\\JAVA_LAP\\dev\\dalmaji\\springPrj\\dalmajiPrj\\src\\main\\resources\\bookImg";
		String originName = f.getOriginalFilename();
		
		//원래는 "path + changeName(랜덤값) + 확장자" 로 해야함
		File target = new File(path + originName);
		
		//파일 바이트코드 읽어서 타겟에 저장
		f.transferTo(target);
		
		return path + originName;
	}

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// 게시글 수정(제목,저자,이미지)
	@PostMapping("admin/edit")
	public String edit(BookVo vo) throws Exception {
		int result = service.edit(vo);
		if (result != 1) {
			throw new Exception();
		}
		return "redirect:/search/admin/detail?no=" + vo.getBookNo();
	}

	// 게시글 삭제(관리자만)
	@GetMapping("admin/delete")
	public String delete(BookVo vo) throws Exception {
		int result = service.delete(vo);
		if (result != 1) {
			throw new Exception();
		}
		return "redirect:/book/admin/list";
	}

}
