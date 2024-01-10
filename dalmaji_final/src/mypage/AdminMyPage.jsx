import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledAdminBorrowListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 0.3fr 1.5fr 1fr 8fr 2fr 1.5fr;
    place-items: center center;
    & > div {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center center;
    }
    & > div > h1 {
        color: #217DFF;
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

    & > .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }
    
    & > .pagination > button {
        margin: 0;
        padding: 5px 10px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
    }

    & > .pagination > .active {
        background-color: #217DFF;
        color: white;
    }
    
`;

const AdminMyPage = () => {

    //페이징 처리 준비
    const itemsPerPage = 7;   // 한 페이지당 표시할 리스트 수
    const [currentPage, setCurrentPage] = useState(1);  //페이지 첫 로딩시 1페이지 디폴드값으로 보여지도록
    const [adminBorrowVoList, setAdminBorrowVoList] = useState([]);

    //전체 페이지 수 계산
    const totalPages = Math.ceil(adminBorrowVoList.length / itemsPerPage);

    //현재 페이지의 아이템 목록 계산
    const currentItems = adminBorrowVoList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    //fetch 이용해 데이터 준비
    const loadAdminBorrowVoList = () => {
        fetch("http://127.0.0.1:8888/app/admin/borrow/list")
        .then( resp => resp.json() )
        .then( (data) => {
            console.log(data) 
            setAdminBorrowVoList(data); } )
        ;
    }

    useEffect( () => {
        loadAdminBorrowVoList();
        console.log(adminBorrowVoList);
    }, [] );

    const handlePageChage = (page) => {
        setCurrentPage(page);
    };

    return (
        <StyledAdminBorrowListDiv>
            <div></div>
            <div><h1>유저 대출/반납 기록</h1></div>
            <div>검색기능 구현한다면.....</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>도서번호</th>
                            <th>책 제목</th>
                            <th>저자</th>
                            <th>출판사</th>
                            <th>사용자 번호</th>
                            <th>사용자 이름</th>
                            <th>대출일</th>
                            <th>반납일</th>
                            <th>연체횟수</th>
                            <th>상태</th>
                            <th>제한사항</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            adminBorrowVoList.length === 0
                            ?
                            <h1>로딩중...</h1>
                            :
                            adminBorrowVoList.map( vo => <tr key={vo.overdueNo}>
                                <td>{vo.overdueNo}</td>
                                <td>{vo.bookNo}</td>
                                <td>{vo.title}</td>
                                <td>{vo.author}</td>
                                <td>{vo.company}</td>
                                <td>{vo.memberNo}</td>
                                <td>{vo.name}</td>
                                <td>{vo.borrowDate}</td>
                                <td>{vo.dueDate}</td>
                                <td>{vo.overdueCount}</td>
                                <td>{vo.bookState}</td>
                                <td>{vo.borrowYn}</td>
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
            <div>빈칸</div>
        </StyledAdminBorrowListDiv>
    );
};

export default AdminMyPage;