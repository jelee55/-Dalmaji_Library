import React from 'react';
import styled from 'styled-components';

const StyledLoginMainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    place-items: center center;
`;


const MemberEdit = () => {
    return (
        <StyledLoginMainDiv>
            <div className='edittitle'>내 정보관리</div>
            <form action="">
                <table>
                    <tbody>
                        <tr>
                            <td>이름</td>
                            <td><input type="text" name='name' /></td>
                        </tr>
                        <tr>
                            <td>아이디</td>
                            <td><input type="text" name='id' /></td>
                        </tr>
                        <tr>
                            <td>비밀번호 변경</td>
                            <td><input type="password" name='pwd' /></td>
                        </tr>
                        <tr>
                            <td>휴대폰번호</td>
                            <td><input type="text" name='phone' /></td>
                        </tr>
                        <tr>
                            <td>문자수신 여부</td>
                            <td><input type="radio" name='ysms' />예</td>
                            <td><input type="radio" name='nsms' />아니오</td>
                        </tr>
                        <tr>
                            <td>이용자 상태</td>
                            <td><input type="text" name='name' /></td>
                        </tr>
                        <tr>
                            <button>저장</button>
                        </tr>
                    </tbody>
                </table>
            </form>
        </StyledLoginMainDiv>
    );
};

export default MemberEdit;