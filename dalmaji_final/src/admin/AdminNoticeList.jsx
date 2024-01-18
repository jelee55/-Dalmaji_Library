import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledNoticeListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 0.3fr 1.5fr 1fr 8fr 2fr 1.5fr;
    place-items: center center;
    padding: 3%;
    & > div {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center center;
    }

    & > .table > table {
        text-align: center;
        width: 85%;
        height: 100%;
        margin: 0;
        padding: 0;
        border-collapse: collapse;
        & > thead > tr {
            width: 100%;
            height: 55px;
        }
        & > thead > tr > th {
            margin: 0;
            padding: 0;
            background-color:  #2f2f49;
            color: white;
            border: 2px solid white;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }
        & > tbody > tr {
            width: 100%;
            height: 55px;
        }
        & > tbody > tr > td {
            margin: 0;
            padding: 0;
            background-color: #F8F4EC;
            border: 2px solid white;
        }
    }

    & > .write_btn{
        width:83%;
        height: 23%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 2%;
        /* background-color: red; */

        & > a {
            width: 8%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            border-radius: 8px;
            border: 1px solid black;
            /* list-style: none; */
            /* background-color: aqua; */

        }

        & > a:hover {
            color: blue;
        }
    }
    & > .pagination {
        display: flex;
        justify-content: center;
        margin-bottom: 80px;

        & > button {
            border: none;
            border-radius: 20px;
            margin: 0 5px;
            padding: 5px 10px;
            cursor: pointer;
        }
    }
`;


const NoticeList = () => {

    console.log("AdminNoticeList 컴포넌트 렌더링");
        const [noticeListVoList, setnoticeListVoList] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 상태 추가
        const [totalPages, setTotalPages] = useState(1);    // 전체 페이지 수 상태 추가
        const [oNo, setONo] = useState();
        const [vo, setVo] = useState({
            oNo: "",
            memberNo: "",
        });

        const [noticeListVo, setnoticeListVo] = useState([]);

        const navigate = useNavigate();

    useEffect(()=>{
        console.log("useEffect 호출됨~");
        loadNoticeVoList();
    }, []);

    //fetch 이용해 데이터 준비 (페이지 처리)
    // const [NoticeVoList,setNoticeVoList] = useState([]);
    const loadNoticeVoList = (page) => {
        
        // URL 문자열 안에 변수를 넣을 때는 백틱(``)을 사용하고, 변수는 ${}로 감싸줌
        fetch(`http://127.0.0.1:8888/app/notice/list?currentPage=${page}` , {
            method: "GET" ,
            headers: {
                "Content-Type" : "application/json",
            },
        })
        .then( resp => resp.json() )
        .then( (data) => {
            console.log('voList' , data.voList);
            setnoticeListVoList(data.voList); //데이터 저장
            setTotalPages(data.pvo.maxPage); //총 페이지 수 저장
            console.log('data' , data);
        })
        ;
    }


    //페이지 번호를 클릭하면 해당 페이지의 목록을 불러오는 함수
    const handlerClickPageNum = (page) => {
        console.log(`page = ${page}`);
        setCurrentPage(page);  //페이지 변경 요청 수행
    }

    useEffect( () => {
        loadNoticeVoList(currentPage); //현재 페이지의 목록 불러오기
    }, [currentPage] );
    
    useEffect( () => {
        console.log(noticeListVoList);
    }, [noticeListVoList] );
    

    


    return (
        <StyledNoticeListDiv>
            <div></div>
            <div className='notice_title'><h1>공지사항</h1></div>
            <div className='search'>검색기능</div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            noticeListVoList.length === 0
                            ?
                            (<tr>
                                <td colSpan="4">로딩중...</td>
                            </tr>)
                            :
                            noticeListVoList.map( vo => <tr key={vo.no}>
                                <td>{vo.no}</td>
                                <td>{vo.title}</td>
                                <td>{vo.enrollDate}</td>
                                <td>{vo.hit}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='write_btn'><a href="http://localhost:3000/admin/notice/write">글 작성하기</a></div>
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
           

        </StyledNoticeListDiv>
    );
};

export default NoticeList;