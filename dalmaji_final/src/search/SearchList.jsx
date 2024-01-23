import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledSearchListDiv = styled.div`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3%;
   

    & > table {
        width: 70%;
        height: 90%;
        margin-top: 2.5%;
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
    & > .h11 {
        width: 70%;
        margin-bottom: 2%;
        h1{
            margin-bottom: 2%;
            margin-left: 2%;
            color: #2f2f49;
            font-size: 45px;
            font: bold;
        }
        
    }
    & > .h11 > .h12 {
        border-bottom: 6px solid #2f2f49;
        flex-direction: column;
        align-items: right;
    }   
        
    & >  table th,
         table td{
            border-left: none;
            border-right: none;
            text-align: center;

         }
         
         & > table td {
             background-color: #F8F4EC;
             .detail_button {
                /* border: none; */
                border-radius: 10%;
                color: #2f2f49;
                /* border-color: #9e9ead; */
                /* background-color: #5f5f9b; */
             }
             
            }
            & > .ul{
                width: 70%;
                height: 5%;
                background-color: #F8F4EC; // ul 베이지 
                /* background-color: #9e9ead;// ul 그레이 */
                /* border: 1px solid #9e9ead; */
                color: #2f2f49;
                /* color: white; */
                font: bold;//적용ㄴㄴ?
                border-radius: 8px;
                display: flex;
                justify-items: center;
                margin-top: 0%;
                margin-bottom: 3%;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                font: bold;
                ul {
                    padding: 0%;
                    width: 100%;
                    height: 10%;
                    display: flex;
                    justify-content: space-evenly;
                    list-style: none;
            
            }
    }
    & > .bnt {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`;

const SearchList = () => {

    
    //fetch 이용해 데이터 준비
    const [bookVoList, setBookVoList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 상태 추가
    const [totalPages, setTotalPages] = useState(1);    // 전체 페이지 수 상태 추가
    
    const loadBookVoList = () => {
        fetch("http://127.0.0.1:8888/app/search/list")
            .then(resp => resp.json())
            .then((data) => {
                console.log('data ::: ', data);
                setBookVoList(data.voList);})
            ;
    }

    useEffect(() => {
        console.log("useEffect 호출됨");
        loadBookVoList();
    }, []);



        //fetch 이용해 데이터 준비 (페이지 처리)
        const loadBookVoListTwo = (page) => {
        
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
        loadBookVoListTwo(currentPage); //현재 페이지의 목록 불러오기
    }, [currentPage] );
    
    useEffect( () => {
        console.log("bookVoList", bookVoList);
    }, [bookVoList] );
        
    return (
        <StyledSearchListDiv>
        <div className='h11'>
            <div className='h12'>
                <h1><strong>도서목록</strong></h1>
            </div>
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
                    <th> 상세조회</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookVoList === undefined && bookVoList === null && bookVoList.length === 0
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
                    <td><Link to={`/search/detail/${vo.bookNo}`}><button className='detail_button'>상세조회</button></Link></td>
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