import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledDetailListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center center;
    background-color: red;
& > div {
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: blue;
}
& > form {
        width: 60%;
        height: 80%;
        /* border: 2px solid black; */
        /* background-color: beige; */
}        
& > div > button {
        width: 100px;
        height: 35px;
        border-radius: 12px;
        background-color: navy;
        color: white;
        font-family: 'Pretendard';
        font-weight: 700;
        font-size: 16px;
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
        <form >
            <div>
                <div className='title'>제목</div>
                <div><input type="text" name='title' /></div>
                <div className='author'>작성자</div>
                <div><input type="text" name='author' /></div>
                <div className='company'>출판사</div>
                <div><input type="text" name='company' /></div>
                <div><button type='button'>검색</button></div>
                <div><button type='button'>다시쓰기</button></div>
           </div>
        </form>



        {/* <form>
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
                    <td><link to="/" />상세조회</td>
                </tr>
                        )
                }
                
            </tbody>
        </table>
        </form> */}
    </StyledDetailListDiv>
    );
};
export default SearchDetailList;