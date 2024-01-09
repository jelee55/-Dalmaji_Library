import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSearchListDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const BookVoList = () => {
    //fetch 이용해 데이터 준비
    const [BookVoList, setBookVoList] = useState([]);
    const loadBookVoList = () => {
        fetch("http://127.0.0.1:8888/app/book/list")
        .then( resp => resp.json() )
        .then( (x) => { setBookVoList(x); } )
        ;
    }

    useEffect( () => {
        loadAdminBorrowVoList();
    } );
};

const SearchList = () => {
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
                <tr>
                    <td>no</td>
                    <td>title</td>
                    <td>author</td>
                    <td>company</td>
                    <td>cont</td>
                    <td>publisherYear</td>
                    <td><link rel="stylesheet" href="" />상세조회</td>
                </tr>
            </tbody>
        </table>
        </StyledSearchListDiv>
    );
};

export default SearchList;