import React from 'react';
import styled from 'styled-components';

const StyledSearchDeailDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 5fr 3fr 2fr 3fr;
    place-content: center center;
`;

const SearchDetail = () => {
    return (
        <StyledSearchDeailDiv>
            <div> <h1>상세정보</h1>           
                
                <div></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledSearchDeailDiv>
    );
};

export default SearchDetail;