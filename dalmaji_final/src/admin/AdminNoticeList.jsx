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
    & > button {
        width: 30%;
        font-size: 2rem;
    }
`;


const AdminNoticeList = () => {

    console.log("AdminNoticeList 컴포넌트 렌더링 ~~~");

    const Navigate = useNavigate();
    


    //fetch 를 이용해서 데이터 준비
    const [AdminNoticeVoList,setAdminNoticeVoList] = useState([]);
    const loadAdminNoticeVoList = () => {
        fetch("http://127.0.0.1:8888/app/admin/notice/list")
        .then( resp => resp.json() )
        .then( (x) => { setAdminNoticeVoList(x); })
        ;
    }

    useEffect(()=>{
        console.log("useEffect 호출됨~");
        loadAdminNoticeVoList();
    }, []);


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
                        AdminNoticeVoList.length === 0
                        ?
                        (<tr>
                            <td colSpan="5">로딩중...</td>
                        </tr>)
                        :
                        AdminNoticeVoList.map( vo => <tr key={vo.no}>
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
                    Navigate("/admin/notice/list");
                }}>작성하기</button>

        </StyledNoticeListDiv>
    );
};

export default AdminNoticeList;