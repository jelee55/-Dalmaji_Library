import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navi from './Navi';
import { Link } from 'react-router-dom';

const StyledHeaderDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr;
    place-items: center center;
`;

const StyledTopMenu = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 2fr 4fr 2fr 1.5fr;
    place-items: center center;
    
    & > a {
        width: 100%;
        height: 100%;
    }

    & > a > div > img {
        width: 150px;
        height: 95px;
        //img를 중앙에 오도록 하려면 일단 block 요인으로 만들어야함.
        display: block;
        margin-top: 0;
    }

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
        left: 400px;
        margin: 0px;
    }

    & > div:nth-child(3) > input {
        outline: none;
        width: 450px;
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
        margin-right: 0;
        justify-content: right;
        align-items: center;
        gap: 20px;
        & > a {
            text-decoration: none;
            color: black;
        }
    }
`;

const Header = () => {

    return (
        <StyledHeaderDiv>
            <StyledTopMenu>
                <div></div>
                <Link to='/'>
                <div><img src="/images/header/newlogo.png" alt="logo" /></div>
                </Link>
                <div>
                    <input type='search' name='search' placeholder='검색어를 입력하세요.'></input>
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div>
                    <Link to='http:/localhost:3000/member/login'>
                    <div>로그인</div>
                    </Link>
                    <Link to='http:/localhost:3000/member/join' >
                    <div>회원가입</div>
                    </Link>
                </div>
                <div></div>
            </StyledTopMenu>
            <Navi />
        </StyledHeaderDiv>
    );
};

export default Header;