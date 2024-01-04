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
    background-color: #D9D9D9;
    
`;

const Navi = () => {
    return (
        <StyledNaviDiv>
            <div><Link to="/notice/list">공지사항</Link></div>
            <div><Link to="/search/*">자료검색</Link></div>
            <div><Link to="/mypage/*">마이페이지</Link></div>
        </StyledNaviDiv>
    );
};

export default Navi;