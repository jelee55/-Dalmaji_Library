import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const StyledAdminEditDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 5fr 3fr 2fr 3fr;
    background-color: brown;
    padding: 10%;
    & > div:first-child > h1 {
            border-bottom: 3px solid black;

        }
    & > .bnt {
        
    }

    
   
`;


const SearchAdminEdit = () => {

      //fetch 이용해 데이터 준비
      const [bookVoList, setBookVoList] = useState([]);
      const loadBookVoList = () => {
          fetch("http://127.0.0.1:8888/app/admin/edit")
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
       <StyledAdminEditDiv>
                <div className='header'>
                    <h1>정보수정</h1>
                </div>
                {/* <div>
                    <div>
                        <img src={vo.bookImg} alt={vo.title} />
                    </div>
                    <div>
                        <div className='title'><strong>{vo.title}</strong></div>
                        <div><strong>작가: </strong> {vo.author}</div>
                        <div><strong>출판사: </strong> {vo.company}</div>
                        <div><strong>출판일: </strong> {vo.publisherYear}</div>
                    </div>
                </div> */}

       </StyledAdminEditDiv>
    );
};

export default SearchAdminEdit;