import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledMemberJoinDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    place-items: center center;
    background-color: red;
`;

const MemberJoin = () => {
    const navigate = useNavigate();

    let isFetching = false;
    const [vo, setVo] =  useState({
        id : "",
        pwd : "",
        nick: ""
    });

    const handleInputChange = (event) => {
        const {name , value} = event.target;

        setVo({
            ...vo,
            [name] : value
        });
    }

    const handleJoinSubmit = (event) => {
        event.preventDefault();

        // 작업을 해도 되나 안해도 되나 검사하는 작업
        if (isFetching) {
            return;
        }

        // 작업 시작
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
        <StyledMemberJoinDiv>
            <form onSubmit={handleJoinSubmit}>
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
                            <td>이름</td>
                            <td><input type="text" name='name' onChange={handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td><input type='reset' /></td>
                            <td><input type="submit" value="회원가입"/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </StyledMemberJoinDiv>
    );
};

export default MemberJoin;