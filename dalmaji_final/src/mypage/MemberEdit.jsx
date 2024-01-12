import React from 'react';
import styled from 'styled-components';

const StyledLoginMainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    place-items: center center;

    & > .edittitle {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10%;
        font-family: 'Pretendard';
        font-weight: 700;
        font-size: 40px;
        /* background-color: yellow; */
    }

    & > form {
        width: 63%;
        height: 120%;
        margin-bottom: 20%;
        border: 2px solid black;
        background-color: beige;

            & > .name {
                height: 5%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Pretendard';
                font-weight: 700;
                font-size: 20px;
                background-color: yellow;
            }

            & > .nameinput {
                height: 3%;
                display: flex;
                justify-content: center;
                background-color: yellowgreen;
            }

            & > .id {
                height: 5%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Pretendard';
                font-weight: 700;
                font-size: 20px;
                background-color: yellow;
            }

            & > .pwd {
                height: 5%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Pretendard';
                font-weight: 700;
                font-size: 20px;
                background-color: yellow;
            }

            & > .phone {
                height: 5%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Pretendard';
                font-weight: 700;
                font-size: 20px;
                background-color: yellow;
            }

            & > .sms {
                height: 5%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Pretendard';
                font-weight: 700;
                font-size: 20px;
                background-color: yellow;
            }

            & > .state {
                height: 5%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Pretendard';
                font-weight: 700;
                font-size: 20px;
                background-color: yellow;
            }
    }
`;


const MemberEdit = () => {
    return (
        <StyledLoginMainDiv>
            <div className='edittitle'>내 정보관리</div>
            <form>
                <div className='name'>이름</div>
                <div className='nameinput'><input type="text" name='name' /></div>
                <div className='id'>아아디</div>
                <div className='idinput'><input type="text" name='id' /></div>
                <div className='pwd'>비밀번호 변경</div>
                <div className='pwdinput'><input type="password" name='pwd' /></div>
                <div className='phone'>휴대폰번호</div>
                <div className='phoneinput'><input type="text" name='phone' /></div>
                <div className='sms'>문자수신 여부</div>
                <div className='smsinput'><input type="radio" name='ysms' />예
                    <input type="radio" name='nsms' />아니오</div>
                <div className='state'>이용자 상태</div>
                <div className='stateinput'><input type="text" name='userstate' /></div> 
                <div className='button'><button>저장</button></div>       
            </form>
        </StyledLoginMainDiv>
    );
};

export default MemberEdit;