import React from 'react';
import styled from 'styled-components';

const StyledLayoutDiv = styled.div`
    width: 100vw;
    height: 150vh;
    /* background-color: ${ (obj) => { return obj.color ? obj.color : 'black' } }; */
    display: grid;
    grid-template-columns: 1.5fr 1fr 4fr 2fr 1.5fr ;
`;

const Layout = () => {
    return (
        <StyledLayoutDiv>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </StyledLayoutDiv>
    );
};

export default Layout;