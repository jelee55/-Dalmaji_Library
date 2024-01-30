import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import Modal from "react-modal";

const StyledUserBorrowListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 8fr 1.5fr;
    place-items: center center;
`;

const StyledUserBorrowContentDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr 3fr 1fr;
    & > div:first-child {
        width: 100%;
        height: 100%;
        border-bottom: 5px solid #4f3379;
    }
    & > div:first-child > h1 {
            margin-top: 50px;
            margin-left: 10px;
            margin-bottom: 10px;
            font-size: 40px;
            color: #4f3379;
        }
    & > div:nth-child(2) > table {
        text-align: center;
        width: 100%;
        height: 75%;
        margin-top: 30px;
        padding: 0;
        border-collapse: collapse;
        & > thead > tr {
            width: 100%;
            height: 50px;
        }
        & > thead > tr > th {
            margin: 0;
            padding: 0;
            border-radius: 9px;
            background-color: #3a4377;
            color: white;
            border: 2px solid white;
        }
        & > tbody > tr > td {
            margin: 0;
            padding: 0;
            background-color: #FAEBEF;
            border: 2px solid white;
            color: #24294b;
            & > button {
                border: none;
                border-radius: 8px;
                background-color: #392467;
                color: white;
            }
            & > button:hover{
                filter: brightness(170%);
            }
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

const StyledModalDiv = styled.div`
    z-index: 100;
    width: 300px;
    height: 200px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: white;
    box-shadow: 3px 3px 6px 2px rgba(169, 169, 169, 0.5);
    border-radius: 20px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    place-items: center center;
    & > div:first-child {
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: #EFEFF1;
        padding-top: 40px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        & > h1 {
            font-size: 20px;
        }
    }
    & > div:nth-child(2) {
        display: flex;
        gap: 5px;
        & > button {
            width: 70px;
            height: 30px;
            border: none;
            border-radius: 7px;
            background-color: #275FBC;
            color: white;
            cursor: pointer;
        }
        & > button:hover {
            background-color: #E72900;
        }
    }
`;

const MemberBorrowList = () => {

    console.log("MemberBorrowMypage render ~~~~");
    

    //사용할 변수 준비
    const memberNo = useParams();
    const [userBorrowList, setUserBorrowList] = useState([]);
    const [modal, setModal] = useState(false);
    const [bookNo, setBookNo] = useState('userBorrowList.bookNo');
    console.log("memberNo:::", memberNo);
    const [change, setChange] = useState('');

    // 대출 리스트 보여주기
    useEffect( () => {
        const loadUserBorrowList = () => {
    
            fetch(`http://127.0.0.1:8888/member/borrowList?memberNo=${memberNo.memberNo}`)
            .then( resp => resp.json() )
            .then( (data) => {
                console.log('data::', data);
                setUserBorrowList(data.voList);
                console.log('voList::', data.voList);
            } )
            ;
        }
        loadUserBorrowList();
    }, [change])

    console.log('userBorrowList::: ',userBorrowList);

    // 반납버튼 클릭 핸들러
    const handlerClickReturn = (bookNo) => {

        console.log('handlerClickReturn 시작!!');
        console.log('bookNo1번째:::',bookNo);

        fetch("http://127.0.0.1:8888/app/mypage/borrow/returnBook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bookNo: bookNo,
            })
        })
        .then((resp) => resp.json())
        .then((data => {
            console.log('반납버튼click data:: ' + data);
            console.log('bookNo2번째:::',bookNo);
            setModal(false);
            alert("반납완료!");
            setChange(change + 'a');
        }))
        ;
    }

    // //내정보관리
    // const MypageList = () => {
    //     console.log("MypageList 렌더링 중");

    //     // 사용자 정보를 가져오기 위한 식별자, 예를 들어 회원 번호 또는 아이디
    //     const { MemberNo } = useParams();
    //     const [ vo, setVo ] = useState;({});


    //     fetch(`http://127.0.0.1:8888/app/mypage/borrow/list?memberNo=${memberNo.memberNo}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //         console.log('data:::', data);
    //         setVo(data); // 상세 정보 설정
    //     })
    //     .catch((error) => {
    //         console.error('Error fetching notice detail:', error);
    //         setVo({}); // 데이터 로딩 실패 시 상태 초기화
    //     }, [memberNo.memberNo]); // useEffect를 memberNo.memberNo에 의존하도록 설정합니다.
    // };

    return (
        <StyledUserBorrowListDiv>
            <div></div>
            <StyledUserBorrowContentDiv>
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
                                userBorrowList && userBorrowList.map( userBorrowVo => <tr key={userBorrowList.borrowNo}>
                                    <td>{userBorrowVo.bookNo}</td>
                                    <td>{userBorrowVo.title}</td>
                                    <td>{userBorrowVo.author}</td>
                                    <td>{userBorrowVo.company}</td>
                                    <td>{userBorrowVo.borrowDate}</td>
                                    <td>{userBorrowVo.dueDate}</td>
                                    <td>{userBorrowVo.overdueCount}</td>
                                    <td>{userBorrowVo.bookState}</td>
                                    <td>{userBorrowVo.bOption}</td>
                                    <td>
                                        <button value={userBorrowVo.bookNo} onClick={ () => {
                                            
                                            setBookNo(userBorrowVo.bookNo); setModal(!modal)}}disabled={userBorrowVo.bookState === "반납완료"}><FontAwesomeIcon icon={faSquareCheck} /> 반납하기</button>
                                        {
                                            modal === true
                                            ?
                                            <StyledModalDiv>
                                                <div><h1>이 책을 반납하시겠습니까?</h1></div>
                                                <div>
                                                    <button onClick={() => {handlerClickReturn(bookNo)}}>예</button>
                                                    <button onClick={ () => {setModal(false)} }>아니오</button>
                                                </div>
                                            </StyledModalDiv>
                                            :
                                            null
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div>3</div>
                

                <div>5</div>
            </StyledUserBorrowContentDiv>
            <div></div>
        </StyledUserBorrowListDiv>
    );
};

export default MemberBorrowList;