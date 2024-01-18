import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledNoticeDetailDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center center;

    & > div {
        width: 100%;
        height: 100%;
        margin: auto;
    }

        & > .notice_wrap {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            /* background-color:antiquewhite; */

            & > .notice {
                width: 1000px;
                height: 10%;
                display: flex;
                align-items: center;
                margin-top: 2%;
                margin-left: 20%;
                justify-content: flex-start;
                border-bottom: 2px solid black;
                font-size:24px;
                font-weight: bolder;
                /* background-color: greenyellow; */
            }

            & > form {
                width: 1000px;
                height: 80%;
                margin-left: 20%;
                /* border: 2px solid black; */
                /* background-color: beige; */

                    & > .dropdown_head {    
                        width: 100%;
                        height: 14%;
                        margin-bottom: 50px;
                        /* background-color: greenyellow; */

                        &> .date {
                            width: 50%;
                            height: 45%;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            margin-top: 20px;
                            margin-left: 10%;
                            font-size: 15px;
                            /* background-color: azure; */
                            }
            
                        & > .notice_title{
                            width: 50%;
                            height: 45%;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            margin-left: 10%;
                            /* background-color: aqua; */
                            }
                    }


                    & > .dropdown_content{
                        width: 100%;
                        height: 500px;
                        margin-left: 24px;
                        margin-bottom: 15px;
                        border-bottom: 1.5px solid;
                        /* background-color: red; */
                    
                            & > .content{
                                height: 90%;
                                width: 90%;
                                display: flex;
                                justify-content: center;
                                margin-bottom: 80px;
                                margin-left: 50px;
                                border: 1px solid black;
                                /* background-color: lightgray; */
                            }
                    }   
                    
                    & > .list {
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 30px;
                        /* background-color: yellowgreen; */
                    }

                    & > .list > a {
                        height: 65%;
                        width: 10%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        border : 1px solid lightgray;
                        border-radius: 10px;
                    }
                    
                }       

                
    
            }

`;

const AdminNoticeDetail = () => {
    console.log("AdminNoticeDetail 렌더링 중");

    // url에서 noticeNo 추출
    const { no } = useParams(); // 수정된 부분

    // 사용할 변수 준비
    const [vo, setVo] = useState([]);

    useEffect(() => {
        const loadNoticeDetailVo = () => {
            fetch(`http://127.0.0.1:8888/app/admin/notice/detail?no=${no}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log('data:::', data);
                    setVo(data.vo);
                });
        };
        loadNoticeDetailVo();
    }, [no]);


    return (
        <StyledNoticeDetailDiv>
            <div className='notice_wrap'>
            <div className='notice'>공지사항</div>
                <form >
                    <div className="dropdown_head">
                        <div className="date">날짜 : {vo.enrollDate}</div>
                        <div className="notice_title">제목 : {vo.title}</div>
                    </div>
                    <div className='none'></div>
                    <div className='dropdown_content'>
                        <div className="content">{vo.content}</div>
                    </div>
                    <div className='list'><a href='/admin/notice/list'>목록보기</a></div>
                </form>
            </div>
        </StyledNoticeDetailDiv>
    );
};

export default AdminNoticeDetail;