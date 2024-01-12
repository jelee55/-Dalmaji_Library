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
            border-bottom: 3px solid black;
            width: 100%;


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
    const loadBookVoList = () => {
        fetch("http://127.0.0.1:8888/app/search/list")
            .then(resp => resp.json())
            .then((data) => {
                console.log(data);
                setBookVoList(data);})
            ;
    }

    useEffect(() => {
        console.log("useEffect 호출됨");
        loadBookVoList();
    }, []);

    return (
        <StyledSearchListDiv>
        <div className='header'>
            <div><h1>도서검색</h1></div>
            <button>전체보기</button>
            <button>검색</button>
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
                    <th> 도서상태</th>
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
                    <td>{vo.bookState}</td>
                    <td><Link to="/search/detail"><button >상세조회</button></Link></td>
                </tr>
                        )
                }
                
            </tbody>
        </table>
        </StyledSearchListDiv>
    );
};

export default SearchList;