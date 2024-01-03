import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const StyledHeaderDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr;
    place-items: center center;
`;

const StyledFirstTopMenu = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr 4fr 2fr 1.5fr;
    place-items: center center;
    & > div:nth-child(3){
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > div:nth-child(3) > button {
        background-color: transparent;
        border: none;
        position: absolute;
        left: 330px;
        margin: 0px;
    }

    & > div:nth-child(3) > input {
        outline: none;
        width: 380px;
        height: 35px;
        padding-left: 25px;
        font-size: 15px;
        border: 3px solid #051921;
        border-radius: 25px;
    }

    & > div:nth-child(4){
        width: 100%;
        height: 100%;
        display: flex;
        margin: 0;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`;

const StyledSecondTopMenu = styled.div`
     width: 100%;
    height: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    place-items: center center;
    background-color: #D9D9D9;
`;

const Header = () => {
    return (
        <StyledHeaderDiv>
            <StyledFirstTopMenu>
                <div></div>
                <div><img src="images/logo.png" alt="logo" /></div>
                <div>
                    <input type='search' name='search' placeholder='검색어를 입력하세요.'></input>
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div>
                    <div>로그인</div>
                    <div>회원가입</div>
                </div>
                <div></div>
            </StyledFirstTopMenu>
            <StyledSecondTopMenu>
                <div>공지사항</div>
                <div>자료검색</div>
                <div>마이페이지</div>
            </StyledSecondTopMenu>
        </StyledHeaderDiv>
    );
};

export default Header;