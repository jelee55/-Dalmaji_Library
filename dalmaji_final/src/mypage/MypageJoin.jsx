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
        background-color: red;

        & > img {
            height: 150px;
            width: 150px;
            /* margin-top: 400px; */
        }

    }

    & > form {
        width: 60%;
        height: 100%;
        margin-bottom: 10%;
        border: 2px solid black;
        /* background-color: beige; */

        & > .none {
            height: 40px;
            background-color: yellow;
        }

        & > .id {
            height: 30px;
            display: flex;
            margin-left: 36%;
            /* background-color: aqua; */
        }

        & > .idinput {
            height: 30px;
            display: flex;
            margin-left: 36%;
        }

        & > .pwd {
            height: 30px;
            display: flex;
            margin-left: 36%;
        }

        & > .pwdinput {
            height: 30px;
            display: flex;
            margin-left: 36%;
        }

        & > .name {
            height: 30px;
            display: flex;
            margin-left: 36%;
        }

        & > .nameinput {
            height: 30px;
            display: flex;
            margin-left: 36%;
        }

        & > .date {
            height: 30px;
            display: flex;
            margin-left: 36%;
        }

        & > .dateinput {
            height: 30px;
            display: flex;
            margin-left: 36%;
        }

        & > .phone {
            height: 30px;
            display: flex;
            margin-left: 36%;
        }

        & > .phoneinput {
            height: 30px;
            display: flex;
            margin-left: 36%;
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
                <div className='none'>빈칸</div>
                <div className='id'>아이디 *</div>
                <div className='idinput'><input type="text" name='id' placeholder='5~15자(영문, 소문자)' /></div>
                <div className='pwd'>비밀번호 *</div>
                <div className='pwdinput'><input type="password" name='pwd' placeholder='9자~15자(영문, 숫자, 특수문자를 각 1개 이상 조합)' /></div>
                <div className='name'>이름</div>
                <div className='nameinput'><input type="text" name='name'/></div>
                <div className='date'>생년월일</div>
                <div className='dateinput'><input type="date" name="day"/></div>
                <div className='phone'>휴대폰번호</div>
                <div className='phoneinput'><input type="text" name="phone" /></div>
                </form>
        </StyledMypageJoinDiv>
    );
};

export default MypageJoin;