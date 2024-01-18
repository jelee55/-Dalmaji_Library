import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledDetailListDiv = styled.div`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #8c00ff; */
  padding: 0%;
  /* border: 1px solid black; */
  
  & > .header1 {
      font: bold;
      width: 70%;
      height: 20%;
      /* background-color: #9af097; */
      display: flex;
      /* flex-direction: column; */
      align-items: right;
      justify-content: center;
      margin-bottom: 0%;
      border-bottom: 5px solid #2f2f49;
      /* padding: 0%; */
      /* margin-top: 0%; */
      h1 {
        font: 55px;
        width: 100%;
        margin-top: 5%;
        margin-bottom: 0%;
        margin-left: 0%;
        padding: 5%;
        color: #2f2f49;
    }
  
}
& > div {
  display: flex;
  align-items: center center;
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

    `;

const SearchDetailList = () => {
  const [bookVoList, setBookVoList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValues, setSearchValues] = useState({
    title: '',
    author: '',
    company: '',
  });

  const navigate = useNavigate();

  const loadBookVoList = () => {
    fetch('http://127.0.0.1:8888/app/search/detaillist')
      .then((resp) => resp.json())
      .then((data) => {
        setBookVoList(data);
        setSearchResults(data); // 모든 데이터로 검색 결과를 초기화합니다.
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

    // 검색 기능을 구현하세요
    console.log('검색:', searchValues);


    // 검색 결과가 있을 때만 SearchList 페이지로 이동
    const searchResults = bookVoList.filter((vo) => {
      return (
        (vo.title && vo.title.includes(searchValues.title)) ||
        (vo.author && vo.author.includes(searchValues.author)) ||
        (vo.company && vo.company.includes(searchValues.company))
      );
    });

    console.log('검색 결과:', searchResults);
    

    if (searchResults.length > 0) {
      console.log('이동할 경로:', '/search/list');
      navigate('/search/list', { state: { searchResults: searchResults } });
    } else {
      // 검색 결과가 없으면 알림 띄우기
      alert('검색 결과가 없습니다.');
    }
  };

  return (
    <StyledDetailListDiv>
      <div className="header1">
          <h1>도서검색</h1>
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
    
      
    </StyledDetailListDiv>
  );
};

export default SearchDetailList;
