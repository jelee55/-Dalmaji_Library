import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledDetailListDiv = styled.div`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0%;
  
  & > .header1 {
      font: bold;
      width: 65%;
      height: 20%;
      display: flex;
      align-items: right;
      justify-content: center;
      margin-bottom: 3%;
      border-bottom: 6px solid #2f2f49;
      h1 {
        font: 55px;
        width: 100%;
        margin-top: 7%;
        margin-bottom: 0%;
        margin-right: 15%;
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
        margin-left: 30%;
        
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
  // const [searchResults, setSearchResults] = useState([]);
  const [searchValues, setSearchValues] = useState({
    title: '',
    author: '',
    company: '',
  });

  const navigate = useNavigate();

  // const loadBookVoList = () => {
  const handleSearch = () => {
    console.log('searchValues',searchValues);
    fetch('http://127.0.0.1:8888/app/search/detaillist', {
      method: "POST",
      headers : {
        "content-Type": "application/json",
      },
      body : JSON.stringify(searchValues)
    })
      .then((resp) => {
        if(!resp.ok){
          throw new Error('HTTP error! Status: ${res.status}');
        }
        return resp.json();
      })
      .then((data) => {
        console.log("검색결과data ::: " , data);
        setBookVoList(data);

        if (data.length > 0) {
          // console.log('이동할 경로:', '/search/list');
          navigate('/search/list', { 
            state: { 
              bookVoList: data, 
            } 
          });
        } else {
          alert('검색 결과가 없습니다.');
        }
      })
      .catch((error) => {
        console.error('Error fetxhing data:',error);
     
      });
  };

  // useEffect(() => {
  //   handleSearch();
  // }, []);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setSearchValues({
      ...searchValues,
      [name]: value,
    });
  };

    // 검색 결과가 있을 때만 SearchList 페이지로 이동
    // const searchResults = bookVoList.filter((data) => {
    //   return (
    //     (data.title && data.title.includes(searchValues.title)) ||
    //     (data.author && data.author.includes(searchValues.author)) ||
    //     (data.company && data.company.includes(searchValues.company))
    //   );
    // });

    

  // };

  return (
    <StyledDetailListDiv>
      <div className="header1">
          <h1><strong>도서검색</strong></h1>
      </div>
    
      {/* <div className='form'> */}
      <form onSubmit={handleSearch}>
        <div className='search_input'>
          <div className="title">제목</div>
          <div>
            <input
              type="text"
              name="title"
              // value={searchValues.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="author">작성자</div>                                           
          <div>
            <input
              type="text"
              name="author"
              // value={searchValues.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="company">출판사</div>
          <div>
            <input
              type="text"
              name="company"
              // value={searchValues.company}
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