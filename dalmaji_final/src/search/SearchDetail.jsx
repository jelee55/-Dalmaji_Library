import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchDetailDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 8fr 1.5fr;
    place-items: center center;
`;

const StyledDetailContentDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 5fr 3fr 2fr;
    & > div:first-child > h1 {
            margin-top: 50px;
            border-bottom: 3px solid black;
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

const StyledTableDiv = styled.div`
    width: 100%;
    height: 100%;
    & > div:first-child {
        width: 100%;
        height: 50px;
        padding: 10px;
        font-size: 27px;
        background-color: #D9F1FF;
    }
    & > table {
        text-align: center;
        margin-top: 20px;
        width: 100%;
        height: 30%;
        & > thead {
            background-color: #EFEFF1;
            & > tr {
            width: 100%;
            height: 50px;
            }   
        }
        & > tbody > tr {
            width: 100%;
            height: 30px;
        }
    }
`;

const SearchDetail = () => {
    console.log("SearchDetail render!!!");

    //url에서 bookNo 추출
    const selectedBookNo = useParams();
    console.log("selectedBookNo ::: ", selectedBookNo);
    console.log("selectedBookNo.bookNo ::: ", selectedBookNo.bookNo);

    // 사용할 변수 준비
    const [bookDetailVo, setBookDetailVo] = useState([]);

    useEffect( () => {
        const loadBookDetailVo = () => {
            fetch(`http://127.0.0.1:8888/app/search/book/detail?bookNo=${selectedBookNo.bookNo}`,{
                    method: "GET",
                        headers: {
                            "Content-Type" : "application/json",
                        },
                })
            .then( resp => resp.json() )
            .then( (data) => {
                console.log('data:::', data);
                setBookDetailVo(data);
            })
            ;
        }
        loadBookDetailVo();
    }, [selectedBookNo.bookNo] )

    return (
        <StyledSearchDetailDiv>
            <div>1</div>
            <StyledDetailContentDiv>
                <div><h1>상세정보</h1></div>
                <div>
                    <div>
                        <img src={bookDetailVo.bookImg} alt={bookDetailVo.title} />
                    </div>
                    <div>
                        <div className='title'><strong>{bookDetailVo.title}</strong></div>
                        <div><strong>작가: </strong> {bookDetailVo.author}</div>
                        <div><strong>출판사: </strong> {bookDetailVo.company}</div>
                        <div><strong>출판일: </strong> {bookDetailVo.publisherYear}</div>
                    </div>
                </div>
                <StyledTableDiv>
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
                            <tr>
                                <td>{bookDetailVo.bookNo}</td>
                                <td>{bookDetailVo.roomName}</td>
                                <td>{bookDetailVo.bookState}</td>
                                <td>{bookDetailVo.dueDate}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button>대출</button>
                </StyledTableDiv>
                <div>4</div>
            </StyledDetailContentDiv>
            <div>3</div>
        </StyledSearchDetailDiv>
    );
};

export default SearchDetail;