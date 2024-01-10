import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    
`;

const AdminNoticeList = () => {

    console.log("NoticeList 컴포넌트 렌더링 ~~~");

    const navigate = useNavigate();

    //fetch 를 이용해서 데이터 준비
    const [AdminNoticeVoList,setAdminNoticeVoList] = useState([]);
    const loadAdminNoticeVoList = () => {
        fetch("http://127.0.0.1:8888/app/admin/notice/list")
        .then( resp => resp.json() )
        .then( (data) => {
            console.log(data);
             setAdminNoticeVoList(data); })
        ;
    }

    useEffect( ()=>{
        console.log(AdminNoticeVoList);
        loadAdminNoticeVoList();
    }, []);

    console.log("return 직전 ~~~ (곧 렌더링-화면만들기-완료");
    return (
        <StyledAdminNoticeListDiv>
            <table>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                        <th>첨부파일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        adminNoticeVoList.length === 0
                        ?
                        <h1>로딩중...</h1>
                        :
                        adminNoticeVoList.map( vo => <tr key={vo.no}>
                                <td>{vo.no}</td>
                                <td>{vo.title}</td>
                                <td>{vo.writer}</td>
                                <td>{vo.hit}</td>
                                <td>{vo.enrollDate}</td>
                            </tr>
                             )
                    }
                </tbody>
            </table>
           
                <button onClick={ () => {
                    navigate("/board/write");
                }}>게시글 작성하기</button>

        </StyledAdminNoticeListDiv>
    );
};

export default AdminNoticeList;