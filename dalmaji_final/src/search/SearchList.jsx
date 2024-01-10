import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchDetail from './SearchDetail';

const StyledSearchListDiv = styled.div`
       width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > table {
        width: 80%;
        height: 80%;
        border: 3px solid black;
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
        <div>
            <div><h1>스마트도서관 도서검색</h1></div>
            <button>전체보기</button>
            <button>검색</button>
        </div>
        <div>
            <div>전체</div>
            <div>소설</div>
            <div>인문</div>
            <div>경제/경영</div>
            <div>역사/문화</div>
            <div>여행</div>
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
                    <td>{vo.cont}</td>
                    <td>{vo.publisherYear}</td>
                    <td><link to={<SearchDetail />} />상세조회</td>
                </tr>
                        )
                }
                
            </tbody>
        </table>
        </StyledSearchListDiv>
    );
};

export default SearchList;