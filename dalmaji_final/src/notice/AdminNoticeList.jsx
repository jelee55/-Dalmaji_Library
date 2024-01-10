import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminNoticeListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 0.5fr 1.5fr 1fr 8fr 1.5fr;
    place-items: center center;
    & > div {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center center;
    }
    
    & > div > table {
        text-align: center;
        width: 85%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #D9F1FF;
        border-collapse: collapse;
        & > thead > tr {
            width: 100%;
            height: 50px;
        }
        & > thead > tr > th {
            margin: 0;
            padding: 0;
            border: 2px solid white;
        }
        & > tbody > tr > td {
            margin: 0;
            padding: 0;
            border: 2px solid white;
        }
    }
    
`;

const AdminNoticeList = () => {

    //페이징 처리 준비
    const itemsPerPage = 10;   // 한 페이지당 표시할 리스트 수
    const [currentPage, setCurrentPage] = useState(1);  //페이지 첫 로딩시 1페이지 디폴드값으로 보여지도록
    const [NoticeVoList, setNoticeVoList] = useState([]);

    //전체 페이지 수 계산
    const totalPages = Math.ceil(NoticeVoList.length / itemsPerPage);

    //현재 페이지의 아이템 목록 계산
    const currentItems = NoticeVoList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    //fetch 를 이용해서 데이터 준비
    const loadNoticeVoList = () => {
        fetch("http://127.0.0.1:8888/app/admin/notice/list")
        .then( resp => resp.json() )
        .then( (data) => {
            console.log(data) 
             setNoticeVoList(data); })
        ;
    }

    useEffect( ()=>{
        loadNoticeVoList();
        console.log(NoticeVoList);
    }, []);

    const handlePageChage = (page) => {
        setCurrentPage(page);
    };

    return (
        <StyledAdminNoticeListDiv>
            <div><h2>공지사항</h2></div>
            <div>검색기능 추가</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>조회수</th>
                            <th>첨부파일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            NoticeVoList.length === 0
                            ?
                            <h1>로딩중...</h1>
                            :
                            NoticeVoList.map( vo => <tr key={vo.no}>
                                    <td>{vo.no}</td>
                                    <td>{vo.adminNo}</td>
                                    <td>{vo.enrollDate}</td>
                                    <td>{vo.hit}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
                <div className='pagination'>
                    {
                        Array.from({length: totalPages}, (_, index) => (
                            <button key={index + 1}
                                onClick={ () => handlePageChage(index + 1) }
                                className={currentPage === index + 1 ? 'active' : ''}
                            >
                                {index + 1}
                            </button>
                        ))
                    }
                </div>
                <button onClick={ () => {
                    Navigate("/admin/notice/list");
                }}>작성하기</button>

        </StyledAdminNoticeListDiv>
    );
};

export default AdminNoticeList;