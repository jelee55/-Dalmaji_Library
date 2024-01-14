import React from 'react';
import styled from 'styled-components';

const StyledDeleteMainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center center;

    & > .img {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
        /* background-color: red; */

        & > img {
            height: 150px;
            width: 150px;
            /* margin-top: 400px; */
        }

    }

    & > .delete {
        height: 40%;
        width: 60%;
        margin-bottom: 25%;
        border-top: 1px solid black;
        border-bottom: 1px solid black;

        & > .title {
            height: 30px;
            background-color: yellow;
        }
    }
`;

const MemberDelete = () => {
    return (
        <StyledDeleteMainDiv>
            <div className='img'><img src="/images/header/logo.png" alt="로고" /></div>
            <div className='delete'>
                <div className='title'>회원탈퇴</div>
                <div className='title2'>어쩌구저쩌구</div>
            </div>
        </StyledDeleteMainDiv>
    );
};

export default MemberDelete;