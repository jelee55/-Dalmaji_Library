import React from 'react';
import styled from 'styled-components';

const StyledMypageJoinDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    place-items: center center;
    background-color: red;
    `;


const MemberJoin = () => {
    return (
        <StyledMypageJoinDiv>
            <form onSubmit={ handleJoinSubmit }>
                <table>
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td><input type="text" name='id' onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type="password" name='pwd' onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td><input type="text" name='name' onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td><input type='reset' /></td>
                            <td><input type="submit" value="회원가입"/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </StyledMypageJoinDiv>
    );
};

export default MemberJoin;