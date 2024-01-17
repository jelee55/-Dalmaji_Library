import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledSearchListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3%;
    /* width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 5fr 3fr 2fr 3fr;
    padding: 10%; */
    & > table {
        width: 80%;
        height: 80%;
        padding-bottom: 3%
        /* border-collapse: collapse; */
    }
    & > table tr:first-child th{
        background-color:  #2f2f49;
        /* border-top:  1px solid gray; */
        border-bottom: 1px solid gray;
        color: white;
            padding: 20px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
    & > .header h1 {
        width: 100%;
        
        
    }
    & > .header > .border {
        border-bottom: 3px solid black;
        background-color: red;

    }   
        
    & >  table th,
         table td{
            border-left: none;
            border-right: none;
            text-align: center;

         }

    & > table td {
        background-color: #F8F4EC;
        
    }
    & > .ul > ul {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        /* background-color: aqua; */
        
        }
  
    & > .bnt{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`;

const SearchList = () => {

    
    //fetch 이용해 데이터 준비
    const [bookVoList, setBookVoList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 상태 추가
    const [totalPages, setTotalPages] = useState(1);    // 전체 페이지 수 상태 추가
    
    // const loadBookVoList = () => {
    //     fetch("http://127.0.0.1:8888/app/search/list")
    //         .then(resp => resp.json())
    //         .then((data) => {
    //             console.log(data);
    //             setBookVoList(data);})
    //         ;
    // }

    // useEffect(() => {
    //     console.log("useEffect 호출됨");
    //     loadBookVoList();
    // }, []);



        //fetch 이용해 데이터 준비 (페이지 처리)
        const loadBookVoList = (page) => {
        
            // URL 문자열 안에 변수를 넣을 때는 백틱(``)을 사용하고, 변수는 ${}로 감싸줌
            fetch(`http://127.0.0.1:8888/app/search/list?currentPage=${page}`, {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                },
            })
            .then( resp => resp.json() )
            .then( (data) => {
                console.log('voList' , data.voList);
                setBookVoList(data.voList); //데이터 저장
                setTotalPages(data.pvo.maxPage); //총 페이지 수 저장
                console.log('data' , data);
            } )
            ;
        }

     //페이지 번호를 클릭하면 해당 페이지의 목록을 불러오는 함수
     const handlerClickPageNum = (page) => {
        console.log(`page = ${page}`);
        setCurrentPage(page);  //페이지 변경 요청 수행
    }
    
    useEffect( () => {
        loadBookVoList(currentPage); //현재 페이지의 목록 불러오기
    }, [currentPage] );
    
    useEffect( () => {
        console.log("bookVoList", bookVoList);
    }, [bookVoList] );
        
    

    return (
        <StyledSearchListDiv>
        <div className='header'>
            <div className='border'><h1>도서검색</h1></div>
            <Link to="/search/list"><button>전체보기</button></Link>
            <Link to="/search/detaillist"><button>검색</button></Link>
        {/* <ul>
            <li><a>전체보기</a></li>
            <li><a>검색</a></li>
        </ul> */}
        </div>

                <div className='ul'>
                    <ul>
                        <li><a>전체</a></li>
                        <li><a>소설</a></li>
                        <li><a>인문</a></li>
                        <li><a>경제/경영</a></li>
                        <li><a>역사/문화</a></li>
                        <li><a>여행</a></li>
                    </ul>
                </div>
       

        <table>
            <thead>
                <tr>
                    <th> No.</th>
                    <th> 제목</th>
                    <th> 저자</th>
                    <th> 발행처</th>
                    <th> 발행년도</th>
                    <th> 조회수</th>
                    {/* <th> 도서상태</th> */}
                    <th> 상세조회</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookVoList.length === 0
                    ?
                    <h1>로딩중...</h1>
                    :
                    bookVoList.map(vo =><tr key={vo.bookNo}>
                    <td>{vo.bookNo}</td>
                    <td>{vo.title}</td>
                    <td>{vo.author}</td>
                    <td>{vo.company}</td>
                    <td>{vo.publisherYear}</td>
                    <td>{vo.cont}</td>
                    {/* <td>{vo.bookState}</td> */}
                    <td><Link to="/search/detail"><button >상세조회</button></Link></td>
                </tr>
                        )
                }
                
            </tbody>
        </table>
        <div className='pagination'>
                {totalPages 
                ? 
                (
                    Array.from({length: totalPages}, (_, i) =>
                        <button
                            key={`page_button_${i}`}
                            onClick={() => handlerClickPageNum(i + 1)}
                            disabled={currentPage === i+1}
                        >
                            {i + 1}
                        </button>
                    )) 
                : 
                null
                }
            </div>
            <div></div>
        </StyledSearchListDiv>
    );
};

export default SearchList;