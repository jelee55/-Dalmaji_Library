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
        border-collapse: collapse;
        & > thead > tr {
            width: 100%;
            height: 50px;
        }
        & > thead > tr > th {
            margin: 0;
            padding: 0;
            background-color: #20407B;
            color: white;
            border: 2px solid white;
        }
        & > tbody > tr > td {
            margin: 0;
            padding: 0;
            background-color: #D9F1FF;
            border: 2px solid white;
        }
    }

    .restriction{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;

        & > button {
            margin: 0 5px;
            padding: 5px 10px;
            cursor: pointer;
        }
    }
`;

const AdminMyPage = () => {
    const [adminBorrowVoList, setAdminBorrowVoList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 상태 추가
    const [totalPages, setTotalPages] = useState(1);    // 전체 페이지 수 상태 추가

    //fetch 이용해 데이터 준비
    const loadAdminBorrowVoList = () => {
        fetch("http://127.0.0.1:8888/app/admin/borrow/list")
        .then( resp => resp.json() )
        .then( (data) => {
            console.log(data) 
            setAdminBorrowVoList(data);
        } )
        ;
    }

    useEffect( () => {
        loadAdminBorrowVoList();
        console.log(adminBorrowVoList);
    }, [currentPage] );

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
                                <td className='restriction'>
                                    {vo.borrowYn}
                                    {/* <div className='dropdown'>
                                        <button className='dropdown-btn'>변경</button>
                                        <div className='dropdown-content'>
                                            <p onClick={ () => handleDropDownClick('정상이용')}>정상이용</p>
                                            <p onClick={ () => handleDropDownClick('30일 대출금지')}>30일 대출금지</p>
                                            <p onClick={ () => handleDropDownClick('이용금지')}>이용금지</p>
                                        </div>
                                    </div> */}
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div>
                페이징처리
            </div>
            <div>빈칸</div>
        </StyledAdminBorrowListDiv>
    );
};

export default AdminMyPage;