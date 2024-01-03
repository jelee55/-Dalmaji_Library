import React from 'react';
import styled from 'styled-components';

const StyledFooterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 3fr 1fr;
    place-items: center center;
`;

const StyledFirstFooterDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #EFEFF1;
`;

const StyledSecondFooterDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const Footer = () => {
    return (
        <StyledFooterDiv>
            <StyledFirstFooterDiv>
                <div>footer1</div>
            </StyledFirstFooterDiv>
            <StyledSecondFooterDiv>
                <div>footer2</div>
            </StyledSecondFooterDiv>
        </StyledFooterDiv>
    );
};

export default Footer;