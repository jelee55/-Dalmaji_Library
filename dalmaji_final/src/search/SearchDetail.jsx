import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledSearchDetailDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 8fr 1.5fr;
    place-items: center center;
`;

const StyledDetailContentDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 5fr 3fr 2fr 3fr;
    & > div:first-child > h1 {
            border-bottom: 3px solid black;
        }
    & > div:nth-child(2){
        width: 100%;
        height: 100%;
        display: flex;

    }
`;

const SearchDetail = () => {

    // const [bookDetailVo, setBookDetailVo] = useState([]);

    // const loadBookDetailVo = () => {
    //     fetch(`http://127.0.0.1:8888/app/search/book/detail?bookNo=${bookNo}`,{
    //             method: "GET",
    //                 headers: {
    //                     "Content-Type" : "application/json",
    //                 },
    //         })
    //     .then( resp => resp.json() )
    //     .then( (data) => {
    //         console.log(data)
    //         setBookDetailVo(data);
    //     } )
    //     ;
    // }

    // useEffect( () => {
    //     loadBookDetailVo();
    //     console.log(loadBookDetailVo);
    // }, [] );

    return (
        <StyledSearchDetailDiv>
            <div>1</div>
            <StyledDetailContentDiv>
                <div><h1>상세정보</h1></div>
                <div>
                    {/* <div>{bookDetailVo.bookImg}</div>
                    <div>
                        <div>{bookDetailVo.title}</div>
                        <div>{bookDetailVo.author}</div>
                        <div>{bookDetailVo.company}</div>
                        <div>{bookDetailVo.publisherYear}</div>
                        <div>{bookDetailVo.bookNo}</div>
                    </div> */}
                </div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </StyledDetailContentDiv>
            <div>3</div>
        </StyledSearchDetailDiv>
    );
};

export default SearchDetail;