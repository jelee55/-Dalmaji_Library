import React from 'react';
import styled from 'styled-components';

const StyledLoginMainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    place-items: center center;
`;

const StyledFirstMainDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const MypageLogin = () => {
    return (
        <StyledLoginMainDiv>
            <StyledFirstMainDiv>
                <table>
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td><input type="text" name='id'/></td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type="password" name='pwd'/></td>
                        </tr>
                    </tbody>
                </table>
            </StyledFirstMainDiv>
        </StyledLoginMainDiv>
    );
};

export default MyPageLogin;