import React from 'react';
import styled from 'styled-components';

const StyledEditDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const SearchEdit = () => {

    return (
        <StyledEditDiv>
        <form onSubmit={ handleJoinSubmit }>
            <table>
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td><input type="text" name='title' onChange={handleInputChange}/></td>
                    </tr>
                    <tr>
                        <td>작가</td>
                        <td><input type="text" name='author' onChange={handleInputChange}/></td>
                    </tr>
                    <tr>
                        <td>출판사</td>
                        <td><input type="text" name='company' onChange={handleInputChange}/></td>
                    </tr>
                    <tr>
                        <td>발행일</td>
                        <td><input type="text" name='publisherYear' onChange={handleInputChange}/></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </StyledEditDiv>
    );
};

export default SearchEdit;