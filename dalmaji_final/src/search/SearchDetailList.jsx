import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDetailListDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows:1fr 0.5fr 0.5fr 5fr;
  place-items: center center;
  /* background-color: #8c00ff; */
  padding: 0%;
  /* border: 1px solid black; */

  & > .header1 {
      width: 70%;
      height: 25%;
      margin: none;
      /* background-color: #9af097; */
      display: flex;
      flex-direction: column;
      align-items: right;
      justify-content: center;
      border-bottom: 5px solid #2f2f49;
      padding: 0%;
      margin-top: 10%;
      margin-bottom: 35px;
   
    h1 {
        width: 100%;
        margin: 0;
        padding: 0;
        font: bold;
    }
  
}
& > .search_book {
      background-color: red;
    }
& > .header2 {
    width: 70%;
    height: 40px;
    margin: none;
    display: flex;
    /* justify-content: ; */
    margin-top: 10px;  /* .header2 위 간격 조절 */
    border: 1px solid black;
    background-color: #636394;
    font-size: 20px;
    .btn {
      display: flex;
      justify-content: space-between;
      /* color: #8c00ff; */
    }
  }
& > a {
  font-size: 25px;
}

& > form {
    width: 35%;  /* 화면의 45%로 설정 */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

     
    & > div {
        width: 100%;
        height: 25%;
        margin-top: none;
        padding: 0%;
        .title,
        .author,
        .company {
          margin-top: 10%;
          margin-bottom: 5px;
          font-size: 20px;
          /* font: bold; */
          color: red;
       
        }

        input {

            width: 100%;
            height: 50px;
            border-radius: 10px;
          }
        }
        .click {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center center;
        margin-top: 10px;
        
        input[type="submit"],
        input[type="reset"] {
          
          width: 20%;
          height: 40px;
          margin-top: 10px;
          background-color: #2f2f49;
          color: white
        }
       
    }
  }
 /* & > .form {
  background-color: red;
  width: 70%;
  height: 800px;
  margin-top: 5%;
  border: 1px solid black;
 }  */
    `;

const SearchDetailList = () => {
  const [bookVoList, setBookVoList] = useState([]);
  const [searchValues, setSearchValues] = useState({
    title: '',
    author: '',
    company: '',
  });

  const loadBookVoList = () => {
    fetch('http://127.0.0.1:8888/app/search/detaillist')
      .then((resp) => resp.json())
      .then((data) => {
        setBookVoList(data);
      });
  };

  useEffect(() => {
    loadBookVoList();
  }, []);

  const handleInputChange = (e) => {
    setSearchValues({
      ...searchValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // 실제 서버 API를 기반으로 검색 기능을 구현하세요
    console.log('검색:', searchValues);
  };

  return (
    <StyledDetailListDiv>
      <div className="header1">
        <div className='search_book'>
          <h1>도서검색</h1>
        </div>
      </div>
      <div className='header2'>
        <div className="btn">
          <Link to="/search/list">
            <a href='#' className='link_box'>전체보기</a>
          </Link>
        </div>
        <div className="btn">
          <Link to="/search/detaillist">
            <a href='#' className='link_box'>검색</a>
          </Link>
        </div>
      </div>
      {/* <div className='form'> */}
      <form onSubmit={handleSearch}>
        <div className='search_input'>
          <div className="title">제목</div>
          <div>
            <input
              type="text"
              name="title"
              value={searchValues.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="author">작성자</div>
          <div>
            <input
              type="text"
              name="author"
              value={searchValues.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="company">출판사</div>
          <div>
            <input
              type="text"
              name="company"
              value={searchValues.company}
              onChange={handleInputChange}
            />
          </div>
          <div className='click'>
            <input type="submit" value="검색" title="검색" className="searchB" />
            <input type="reset" value="다시쓰기" title="다시쓰기" />
          </div>
        </div>
      </form>
      {/* </div> */}
      
    </StyledDetailListDiv>
  );
};

export default SearchDetailList;
