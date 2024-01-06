import React from 'react';
import styled from 'styled-components';

const StyledHomeMainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    place-items: center center;
    `;

const StyledFirstMainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center center;
    grid-template-columns: 1.5fr 8fr 1.5fr;
    background-color: #D9F1FF;
    & > div > img {
        width: 100%;
        height: 80%;
        display: block;
        margin-top: 0;
    }
`;

const StyledSecondMainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center center;
    grid-template-columns: 1.5fr 8fr 1.5fr;
    & > div > div > img {
        width: 100%;
        height: 80%;
        display: block;
        margin: auto;
    }
`;

const HomeMain = () => {
    return (
        <StyledHomeMainDiv>
            <StyledFirstMainDiv>
                <div></div>
                <div><img src="/images/home/mainPhoto_1.png" alt="홈메인 첫사진" /></div>
                <div></div>
            </StyledFirstMainDiv>
            <StyledSecondMainDiv>
                <div></div>
                <div>
                    <div><img src="/images/home/notice_1.png" alt="홈메인 두번째사진" /></div>
                    <div><img src="/images/home/newBook_1.png" alt="홈메인 세번째사진" /></div>
                </div>
                <div></div>
            </StyledSecondMainDiv>
        </StyledHomeMainDiv>
    );
};

export default HomeMain;