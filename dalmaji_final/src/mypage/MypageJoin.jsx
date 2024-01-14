import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledMypageJoinDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    place-items: center center;
    /* background-color: red; */

    & > .img {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
        /* background-color: re 5d; */

        & > img {
            height: 150px;
            width: 150px;
            /* margin-top: 400px; */
        }

    }

    & > form {
        width: 63%;
        height: 120%;
        margin-bottom: 10%;
        border: 2px solid black;
        /* background-color: beige; */

        & > .none1 {
            height: 10%;
            /* background-color: yellow; */
        }

        & > .none2 {
            height: 5%;
        }

        & > .id {
            height: 30px;
            display: flex;
            margin-left: 35%;
            /* background-color: aqua; */
        }

        & > .idinput {
            height: 30px;
            display: flex;
            justify-content: center;
            /* background-color: yellowgreen; */
        }

        & > .idinput > input {
            width: 30%;
            height: 35px;
            border-radius: 12px;
            border: 1px solid black;
        }
       
        & > .pwd {
            height: 30px;
            display: flex;
            margin-left: 35%;
        }

        & > .pwdinput {
            height: 30px;
            display: flex;
            justify-content: center;
        }

        & > .pwdinput > input {
            width: 30%;
            height: 35px;
            border-radius: 12px;
            border: 1px solid black;
        }

        & > .name {
            height: 30px;
            display: flex;
            margin-left: 35%;
        }

        & > .nameinput {
            height: 30px;
            display: flex;
            justify-content: center;
        }

        & > .nameinput > input {
            width: 30%;
            height: 35px;
            border-radius: 12px;
            border: 1px solid black;
        }

        & > .date {
            height: 30px;
            display: flex;
            margin-left: 35%;
        }

        & > .dateinput {
            height: 30px;
            display: flex;
            justify-content: center;
        }

        & > .dateinput > input {
            width: 30%;
            height: 35px;
            border-radius: 12px;
            border: 1px solid black;
        }

        & > .phone {
            height: 30px;
            display: flex;
            margin-left: 35%;
        }

        & > .phoneinput {
            height: 30px;
            display: flex;
            justify-content: center;
        }

        & > .phoneinput > input {
            width: 30%;
            height: 35px;
            border-radius: 12px;
            border: 1px solid black;
        }

        & > .joinbutton {
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            /* background-color: yellowgreen; */
        }

        & > .resetbutton {
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            /* background-color: yellow; */
        }

        & > .joinbutton > button {
            width: 150px;
            height: 38px;
            border-radius: 12px;
            background-color: navy;
            color: white;
            font-family: 'Pretendard';
            font-weight: 700;
            font-size: 16px;
        }
        & > .resetbutton > button {
            width: 150px;
            height: 38px;
            border-radius: 12px;
            background-color: navy;
            color: white;
            font-family: 'Pretendard';
            font-weight: 700;
            font-size: 16px;
        }
    }
    `;

const MypageJoin = () => {

    const navigate = useNavigate();

    let isFetching = false;
    const [vo] =  useState({
        id : "",
        pwd : "",
        nick: ""
    });

const handleJoinSubmit = (event) => {
    event.preventDefault();

    //작업을 해도되나 안해도되나 검사하는 작업
    if(isFetching){
        return;
    }

    //작업시작
    isFetching = true;
    

    fetch("http://127.0.0.1:8888/app/member/join" , {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(vo)
    })
    .then( resp => {
        if(!resp.ok){
            throw new Error("회원가입 fetch 실패..");
        }
        return resp.json();
    } )
    .then( data => {
        if( data.msg === "good" ){
            alert("회원가입 성공 !");
            navigate("/");
        }else{
            alert("회원가입 실패 ...");
            navigate("/failpage~~~");
        }
        
    } )
    .catch( (e) => {
        console.log(e);
        alert("회원가입 실패");
    } )
    .finally( () => {
        isFetching = false;
    } )
    ;
}


    return (
        <StyledMypageJoinDiv>
            <div className='img'><img src="/images/header/logo.png" alt="로고" /></div>
                <form onSubmit={ handleJoinSubmit }>
                <div className='none1'></div>
                <div className='id'>아이디</div>
                <div className='idinput'><input type="text" name='id' placeholder='5~15자(영문, 소문자)' /></div>
                <div className='none2'></div>
                <div className='pwd'>비밀번호</div>
                <div className='pwdinput'><input type="password" name='pwd' placeholder='9자~15자(영문, 숫자, 특수문자를 각 1개 이상 조합)' /></div>
                <div className='none2'></div>
                <div className='name'>이름</div>
                <div className='nameinput'><input type="text" name='name'/></div>
                <div className='none2'></div>
                <div className='date'>생년월일</div>
                <div className='dateinput'><input type="date" name="day"/></div>
                <div className='none2'></div>
                <div className='phone'>휴대폰번호</div>
                <div className='phoneinput'><input type="text" name="phone" /></div>
                <div className='none2'></div>
                <div className='joinbutton'><button>가입하기</button></div>
                <div className='resetbutton'><button type='reset'>초기화</button></div>
                </form>
        </StyledMypageJoinDiv>
    );
};

export default MypageJoin;