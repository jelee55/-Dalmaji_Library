import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNaviDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    place-items: center center;
    background-color: #2f2f49;
    color: white;
    & > div > a{
        text-decoration: none;
        color: white;
    }
    
`;

const Navi = () => {
    return (
        <StyledNaviDiv>
            <div><Link to="/notice/list">공지사항</Link></div>
            <div><Link to="/search/list">도서목록</Link></div>
            <div><Link to="/search/detaillist">도서검색</Link></div>
            <div><Link to="/admin/mypage">마이페이지</Link></div>
        </StyledNaviDiv>
    );
};

export default Navi;