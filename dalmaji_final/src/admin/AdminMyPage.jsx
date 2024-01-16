import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

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
            border: none;
            border-radius: 20px;
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
    const [oNo, setONo] = useState();
    const [vo, setVo] = useState({
        oNo: "",
        memberNo: "",
    });

    const navigate = useNavigate();

    const handleChangeRestriction = (e) => {
        console.log(e.target.value);
        setVo(parseInt(e.target.value));
        setVo({
            "oNo": e.target.value,
            "memberNo": e.target.value,
        })
        // updateRestriction(vo);
    };

    useEffect(() =>{
        updateRestriction();
    },[vo])
    //fetch 이용해 데이터 준비 (페이지 처리)
    const loadAdminBorrowVoList = (page) => {

        // URL 문자열 안에 변수를 넣을 때는 백틱(``)을 사용하고, 변수는 ${}로 감싸줌
        fetch(`http://127.0.0.1:8888/app/admin/borrow/list?currentPage=${page}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
            },
        })
        .then( resp => resp.json() )
        .then( (data) => {
            console.log('voList' , data.voList);
            setAdminBorrowVoList(data.voList); //데이터 저장
            setTotalPages(data.pvo.maxPage); //총 페이지 수 저장
            console.log('data' , data);
        } )
        ;
    }

    

    // 제한사항부분 업데이트
    function updateRestriction() {
        console.log(vo);
        fetch("http://127.0.0.1:8888/app/admin/borrow/edit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vo)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Update successful', data);
          loadAdminBorrowVoList(currentPage);
          navigate("/admin/borrow/list")
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }


    //페이지 번호를 클릭하면 해당 페이지의 목록을 불러오는 함수
    const handlerClickPageNum = (page) => {
        console.log(`page = ${page}`);
        setCurrentPage(page);  //페이지 변경 요청 수행
    }

    useEffect( () => {
        loadAdminBorrowVoList(currentPage); //현재 페이지의 목록 불러오기
    }, [currentPage] );
    
    useEffect( () => {
        console.log(adminBorrowVoList);
    }, [adminBorrowVoList] );
    
   

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
                            adminBorrowVoList && adminBorrowVoList.length === 0
                            ?
                            (<tr>
                                <td colSpan="12">로딩중...</td>
                            </tr>)
                            :
                            adminBorrowVoList && adminBorrowVoList.map( vo => <tr key={vo.overdueNo}>
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
                                    <select defaultValue={vo.bOption}  onChange={handleChangeRestriction}>
                                        <option value="1">정상이용</option>
                                        <option value="2">30일 대출금지</option>
                                        <option value="3">이용금지</option>
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
        </StyledAdminBorrowListDiv>
    );
};

export default AdminMyPage;