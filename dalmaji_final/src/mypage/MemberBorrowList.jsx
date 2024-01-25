import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledUserBorrowListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 0.3fr 1.5fr 1fr 8fr 2fr;
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
    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;

        & > button {
            border: none;
            border-radius: 20px;
            margin: 0 5px;
            padding: 5px 10px;
            cursor: pointer;
        }
    }
    
`;

const MemberBorrowList = () => {

    console.log("MemberBorrowMypage render ~~~~");

    //사용할 변수 준비
    const memberNo = useParams();
    const [userBorrowList, setUserBorrowList] = useState([]);
    console.log("memberNo", memberNo);

    // 대출 리스트 보여주기
    useEffect( () => {
        const loadUserBorrowList = () => {
    
            fetch(`http://127.0.0.1:8888/app/mypage/borrow/list?memberNo=${memberNo.memberNo}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then( resp => resp.json() )
            .then( (data) => {
                console.log('data::', data);
                console.log('voList::', data.voList);
                setUserBorrowList(data.voList);
            } )
            ;
        }
        loadUserBorrowList();
    }, [memberNo])

    return (
        <StyledUserBorrowListDiv>
            <div>1</div>
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
                            <th>반납</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userBorrowList && userBorrowList.length === 0
                            ?
                            (
                                <tr>
                                    <td colSpan="10">로딩중...</td>
                                </tr>
                            )
                            :
                            userBorrowList && userBorrowList.map( userBorrowVo => <tr key={userBorrowList.overdueNo}>
                                <td>{userBorrowVo.overdueNo}</td>
                                <td>{userBorrowVo.title}</td>
                                <td>{userBorrowVo.author}</td>
                                <td>{userBorrowVo.company}</td>
                                <td>{userBorrowVo.borrowDate}</td>
                                <td>{userBorrowVo.dueDate}</td>
                                <td>{userBorrowVo.overdueCount}</td>
                                <td>{userBorrowVo.bookState}</td>
                                <td>{userBorrowVo.bOption}</td>
                                <td><button>반납하기</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div>5</div>
        </StyledUserBorrowListDiv>
    );
};

export default MemberBorrowList;