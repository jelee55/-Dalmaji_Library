import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDetailListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    /* grid-template-rows: 20% 60% 20%; */
    place-items: center center;
    background-color: red;
& > div {
    width: 100%;
    height: 100%;
}
& > .header {
    width: 80%;
    height: 20%;
    padding: 0%;
    margin: auto;
    background-color: blue;
    display: grid;
    place-items: center center;
    
}
& > .header h1 {
            border-bottom: 3px solid black;
            width: 100%;

        }
& > .btn button {
    /* display: flex;
    justify-content: space-evenly;
    color: yellow; */
}     
& > form {
        width: 60%;
        height: 80%;
        /* border: 2px solid black; */
        /* background-color: beige; */

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
            <div className='header'>
            <div><h1>도서검색</h1></div>
            <div className='btn'><Link to="/search/list"><button>전체보기</button></Link></div> 
            <div className='btn'><Link to="/search/detaillist"><button>검색</button></Link></div> 
        </div>
        <form >
            <div>
                <div className='title'>제목</div>
                <div><input type="text" name='title' /></div>
                <div className='author'>작성자</div>
                <div><input type="text" name='author' /></div>
                <div className='company'>출판사</div>
                <div><input type="text" name='company' /></div>
                <div>
                    <input type='submit' value="검색" title="검색" className='searhB'/>
                    <input type='reset' value="다시쓰기"title="다시쓰기"/>
                </div>
                
           </div>
        </form>



      
    </StyledDetailListDiv>
    );
};
export default SearchDetailList;