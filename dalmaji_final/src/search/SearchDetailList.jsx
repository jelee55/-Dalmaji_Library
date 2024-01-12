import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDetailListDiv = styled.div`
    width: 100%;
    height: 100%;
& > table{
    width: 80%;
    height: 100%;
}
`;

const SearchDetailList = () => {    
    //fetch 이용해 데이터 준비
    const [bookVoList, setBookVoList] = useState([]);
    const loadBookVoList = () => {
        fetch("http://127.0.0.1:8888/app/search/detaillist")
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
        <StyledDetailListDiv>
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td><input type="text" name='title'/></td>
                    </tr>
                    <tr>
                        <td>작가</td>
                        <td><input type="text" name='author'/></td>
                    </tr>
                    <tr>
                        <td>출판사</td>
                        <td><input type="text" name='company' /></td>
                    </tr>
                    <tr>
                        <td><button>검색</button></td>
                    </tr>
                </tbody>
            </table>
        </form>



        <form>
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
                    <td><Link to="/search/detail" />상세조회</td>
                </tr>
                        )
                }
                
            </tbody>
        </table>
        </form>
    </StyledDetailListDiv>
    );
};
export default SearchDetailList;