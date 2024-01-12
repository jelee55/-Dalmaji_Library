import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledNoticeListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > table {
        width: 80%;
        height: 80%;
        border: 3px solid black;
    }
    & > buttton {
        width: 30%;
        font-size: 2rem;
    }
`;


const AdminNoticeList = () => {

    console.log("NoticeList 컴포넌트 렌더링 ~~~");

    const navigate = useNavigate();

    //fetch 를 이용해서 데이터 준비
    const [NoticeVoList,setNoticeVoList] = useState([]);
    const loadNoticeVoList = () => {
        fetch("http://127.0.0.1:8888/app/admin/notice/list")
        .then( resp => resp.json() )
        .then( (x) => { setNoticeVoList(x); })
        ;
    }

    useEffect(()=>{
        console.log("useEffect 호출됨~~~");
        loadNoticeVoList();
    }, []);

    console.log("return 직전 ~~~ (곧 렌더링-화면만들기-완료");
    return (
        <StyledNoticeListDiv>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
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
                                <td>{vo.title}</td>
                                <td>{vo.adminNo}</td>
                                <td>{vo.enrollDate}</td>
                                <td>{vo.hit}</td>
                            </tr>
                             )
                    }
                </tbody>
            </table>
           
                <button onClick={ () => {
                    navigate("/admin/notice/list");
                }}>작성하기</button>

        </StyledNoticeListDiv>
    );
};

export default AdminNoticeList;