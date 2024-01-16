import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDetailListDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr 5fr;
  place-items: center center;
  background-color: #8c00ff;
  padding: 0%;
  
  & > .header1 {
      width: 80%;
      height: 20%;
      margin: auto;
      background-color: #9af097;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 3px solid black;
      padding: 0%;

    h1 {
        width: 100%;
        margin: 0;
        padding: 0;
    }
  
}
& > .header2 {
    width: 80%;
    margin: none;
    display: flex;
    /* justify-content: ; */
    margin-top: 10px;  /* .header2 위 간격 조절 */
    background-color: yellow;
    .btn {
      display: flex;
      justify-content: space-between;
      /* color: #8c00ff; */
    }
  }

& > form {
    width: 40%;  /* 화면의 45%로 설정 */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        width: 100%;
        margin-top: 10px;

        .title,
        .author,
        .company {
            margin-bottom: 5px;
        }

        input {
            width: 100%;
            
        }
    }
    .search-buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        input[type="submit"],
        input[type="reset"] {
            width: 48%;
        }
    }
  }
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
        <div >
          <h1>도서검색</h1>
        </div>
      </div>
      <div className='header2'>
        <div className="btn">
          <Link to="/search/list">
            <button>전체보기</button>
          </Link>
        </div>
        <div className="btn">
          <Link to="/search/detaillist">
            <button>검색</button>
          </Link>
        </div>
      </div>
      <form onSubmit={handleSearch}>
        <div>
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
          <div>
            <input type="submit" value="검색" title="검색" className="searchB" />
            <input type="reset" value="다시쓰기" title="다시쓰기" />
          </div>
        </div>
      </form>
    </StyledDetailListDiv>
  );
};

export default SearchDetailList;
