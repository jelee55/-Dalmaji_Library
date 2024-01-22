import React, { useState } from 'react';
import styled from 'styled-components';

const userBorrowListDiv = styled.div`
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
`;

const MemberBorrowList = () => {

    console.log("MemberBorrowMypage render ~~~~");
    const [borrowList, setBorrowList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 상태 추가
    const [totalPages, setTotalPages] = useState(1);    // 전체 페이지 수 상태 추가

    // 페이지 처리
    fetch(`http://127.0.0.1:8888/app/mypage/borrow/list?currentPage=${page}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(resp => resp.json())
    .then((data) => {
        console.log('voList', data.voList);
    })

    return (
        <userBorrowListDiv>
            <div></div>
            <div><h1>내서재</h1></div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>도서번호</th>
                            <th>책 제목</th>
                            <th>저자</th>
                            <th>출판사</th>
                            <th>대출일</th>
                            <th>반납일</th>
                            <th>연체횟수</th>
                            <th>상태</th>
                            <th>제한사항</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            adminBorrowVoList && adminBorrowVoList.length === 0
                            ?
                            (<tr>
                                <td colSpan="8">로딩중...</td>
                            </tr>)
                            :
                            adminBorrowVoList && adminBorrowVoList.map( adminBorrowVo => <tr key={adminBorrowVoList.overdueNo}>
                                <td>{adminBorrowVo.bookNo}</td>
                                <td>{adminBorrowVo.title}</td>
                                <td>{adminBorrowVo.author}</td>
                                <td>{adminBorrowVo.company}</td>
                                <td>{adminBorrowVo.borrowDate}</td>
                                <td>{adminBorrowVo.dueDate}</td>
                                <td>{adminBorrowVo.overdueCount}</td>
                                <td>{adminBorrowVo.bookState}</td>
                                <td className='restriction'>
                                    <select onChange={(e) => {
                                        updateRestriction(adminBorrowVo.memberNo, e.target.value);
                                    }}>
                                        {
                                            optionList && optionList.length === 0
                                            ?
                                            <option value="로딩중">로딩중...</option>
                                            :
                                            optionList && optionList.map(optionVo => {
                                                console.log('adminBorrowVo',adminBorrowVo.oNo);
                                                console.log('optionVo.oNo',optionVo.oNo);
                                                if(adminBorrowVo.oNo === optionVo.oNo){
                                                    return <option selected key={optionVo.oNo} value={optionVo.oNo}>{optionVo.bOption}</option>                                                
                                                }else{
                                                    return <option key={optionVo.oNo} value={optionVo.oNo}>{optionVo.bOption}</option>
                                                }
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='pagination'>
                {totalPages 
                ? 
                (
                    Array.from({length: totalPages}, (_, i) =>
                        <button
                            key={`page_button_${i}`}
                            onClick={() => handlerClickPageNum(i + 1)}
                            disabled={currentPage === i+1}
                        >
                            {i + 1}
                        </button>
                    )) 
                : 
                null
                }
            </div>
            <div>빈칸</div>
        </userBorrowListDiv>
    );
};

export default MemberBorrowList;