import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLoginMainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center center;
    & > div {
        width: 100%;
        height: 100%;
        margin: auto;
    }
    & > form {
                width: 80%;
                height: 80%;
                border: 2px solid black;
                /* background-color: beige; */
        
        
        & > div:nth-child(1) {
            height: 35%;
            display: flex;
            align-items: center;
            justify-content: center;
            /* background-color: red; */
        }
        
        & > div:nth-child(2) {
            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            /* background-color: yellow; */
        }

        & > div:nth-child(3) {
            height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            /* background-color: greenyellow; */
        }

        & > div > table {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            /* table-layout: fixed; */
            /* background-color: yellow; */
        }

        & > div > table > tbody > tr:nth-child(1) {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            /* background-color: pink; */
        }

        & > div > table > tbody > tr:nth-child(2) {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            /* background-color: aqua; */
        }

        & > div > table > tbody > tr:nth-child(3) {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            /* background-color: violet; */
        }
        
        & > div > table > tbody > tr:nth-child(1) {
            outline: none;
            width: 450px;
            height: 35px;
            padding-left: 25px;
            font-size: 15px;
            border: 3px solid #051921;
            border-radius: 25px;
        }
        
        & > tbody > tr > td {
            margin: 0;
            padding: 0;
            border: 2px solid white;
        }

        & > tbody > tr > td:nth-child(6) {
            display: flex;
            margin: 10%;
        }
    }
`;


const MypageLogin = () => {

    const navigate = useNavigate();

    let isFetching = false;
    const [vo, setVo] =  useState({
        id : "",
        pwd : "",
    });

    const handleInputChange = (event) => {
        const {name , value} = event.target;

        setVo({
            ...vo,
            [name] : value
        });
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        //작업을 해도되나 안해도되나 검사하는 작업
        if(isFetching){
            return;
        }

        //작업시작
        isFetching = true;

        fetch("http://127.0.0.1:8888/app/member/login" , {
        method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(vo)
        })
        .then( resp => {
            if(!resp.ok){
                throw new Error("로그인 fetch 실패..");
            }
            return resp.json();
        } )
        .then( data => {
            if( data.msg === "good" ){
                alert("로그인 성공 !");
                navigate("/");
            }else{
                alert("로그인 실패 ...");
                navigate("/failpage~~");
            }
            
        } )
        .catch( (e) => {
            console.log(e);
            alert("로그인 실패");
        } )
        .finally( () => {
            isFetching = false;
        } )
        ;
    }

    return (
        <StyledLoginMainDiv>
            <form onSubmit={ handleLoginSubmit }>
                <div><img src="/public/images/header/logo.png" alt="로고" /></div>
                <div><h1>로그인</h1></div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>아이디</td>
                                <td><input type="text" name='id' onChange={handleInputChange}/></td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td><input type="password" name='pwd' onChange={handleInputChange}/></td>
                            </tr>
                            <tr>
                                <td><button value="로그인"/></td>
                                <td><button type="reset" value="초기화"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </StyledLoginMainDiv>
    );
};

export default MypageLogin;