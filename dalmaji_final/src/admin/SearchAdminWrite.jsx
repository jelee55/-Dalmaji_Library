import React from 'react';
import styled from 'styled-components';
    const StyledAdminWriteDiv = styled.div`
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1.5fr 8fr 1.5fr;
        place-items: center center;
    `;
    
    const StyledWriteContentDiv = styled.div`
       width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 5fr 3fr 1fr;
        
        & > div:first-child > h1 {
            width: 100%;
            color: #2f2f49;
            border-bottom: 5px solid #2f2f49;
            /* display: flex; */
            /* justify-content: space-between ;/ */
            margin-top: 50px;
        }
        & > div:nth-child(2){
        width: 100%;
        height: 100%;
        margin: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > div {
            width: 100%;
            height: 100%;
            & > .title{
                font-size: 33px;
            }
            & > div {
                margin-top: 15px;
                font-size: 24px;
            }
        }
        & > div > img{
            width: 350px;
            height: 500px;
        }

    }
`;
const StyedTableDiv = styled.div`

`;
const SearchAdminWrite = () => {


    return (
        <StyledAdminWriteDiv>
        <StyledWriteContentDiv>
            <div className='title'>
                <h1>도서작성</h1>
            </div>
            <div>
                <div>이미지칸</div>
                {/* <img src={bookImg} alt={title} /> */}
            </div>
            <div>
                <div>제목: <strong><input type="text" /></strong></div>
                <div>작가: <strong><input type="text" /></strong></div>
                <div>출판사: <strong><input type="text" /></strong></div>
                <div>출판일: <strong><input type="text" /></strong></div>
            </div>
            <StyedTableDiv>
            <div>소장정보</div>
                    <table>
                        <thead>
                            <tr>
                                <th>NO.</th>
                                <th>소장위치</th>
                                <th>도서상태</th>
                                <th>반납예정일</th>
                            </tr> 
                        </thead>
                        <tbody> 
                            {/* <tr>
                                <td>{vo.bookNo}</td>
                                <td>{vo.roomName}</td>
                                <td>{vo.bookState}</td>
                                {
                                    borrowVo === undefined
                                    ?
                                    <td></td>
                                    :
                                    <td>{borrowVo.dueDate}</td>
                                    
                                }
                            </tr> */}
                        </tbody>
                    </table>
            </StyedTableDiv>

        </StyledWriteContentDiv>
        <div></div>
    </StyledAdminWriteDiv>
    );
};

export default SearchAdminWrite;