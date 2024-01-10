import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLoginMainDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const StyledFirstMainDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
    & > form {
        width: 100%;
        height: 100%;
        margin: auto;
        border: 5px dashed black;
        & > table {
            width: 100%;
            height: 100%;
            table-layout: fixed;
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
            <StyledFirstMainDiv>
                <form onSubmit={ handleLoginSubmit }>
                    <div>빈칸</div>
                    <div><img src="/public/images/header/logo.png" alt="로고" /></div>
                    <div><h1>로그인</h1></div>
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
                                <td><input type="reset" /></td>
                                <td><input type="submit" value="로그인"/></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </StyledFirstMainDiv>
        </StyledLoginMainDiv>
    );
};

export default MypageLogin;