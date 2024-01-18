import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

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
    grid-template-rows: 1fr 5fr 3fr 1fr;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    & > button {
        width: 80px;
        height: 35px;
        font-size: 18px;
        margin-top: 30px;
        background-color: #275FBC;
        border: none;
        border-radius: 7px;
        color: white;
        cursor: pointer;
    }
    & > button:hover{
        filter: brightness(130%);
    }
`;

const StyledModalDiv = styled.div`
    z-index: 100;
    width: 500px;
    height: 400px;
    background-color: white;
    box-shadow: 3px 3px 6px 2px rgba(169, 169, 169, 0.5);
    border-radius: 20px;
    position: fixed;
    display: grid;
    grid-template-rows: 1.5fr 1fr 1fr 1fr;
    place-items: center center;
    top: 25vh;
    left: 35vw;
    & > div:first-child {
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: #EFEFF1;
        padding-top: 40px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    & > div:nth-child(2) {
        font-size: 25px;
    }
    & > input {
        width: 200px;
        height: 40px;
        font-size: 25px;
        padding-left: 7px;
    }
    & > div:nth-child(4) {
        display: flex;
        gap: 10px;
        & > button {
            width: 50px;
            height: 30px;
            border: none;
            border-radius: 7px;
            background-color: #666666;
            color: white;
            cursor: pointer;
        }
        & > button:hover {
            background-color: #E72900;
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

    // 모달창을 위한 준비
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };
    
    return (
        <StyledSearchDetailDiv>
            <div></div>
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
                    <button onClick={ () => { setModal(!modal) } }><FontAwesomeIcon icon={faBook} /> 대출</button>
                    {modal === true 
                        ? 
                        <StyledModalDiv>
                            <div><h1>알림</h1></div>
                            <div> <FontAwesomeIcon icon={faLock} /> 대출 비밀번호를 입력해주세요.</div>
                            <input type="password" placeholder='password'/>
                            <div>
                                <button>완료</button>
                                <button onClick={ () => {setModal(modal)} }>취소</button>
                            </div>
                        </StyledModalDiv> 
                        : 
                        null
                    }
                </StyledTableDiv>
                <div>4</div>
            </StyledDetailContentDiv>
            <div></div>
        </StyledSearchDetailDiv>
    );
};

export default SearchDetail;