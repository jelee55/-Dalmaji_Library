import React from 'react';
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
                        height: 10%;
                        /* background-color: greenyellow; */

                        &> .date {
                            width: 50%;
                            height: 45%;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            margin-top: 20px;
                            margin-left: 8%;
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

                    & > .none {
                    height: 4%;
                    /* background-color: yellow; */
                    }

                    & > .dropdown_content{
                        width: 940px;
                        height: 500px;
                        margin-left: 24px;
                        margin-bottom: 15px;
                        /* border-bottom: 1.5px solid; */
                        /* background-color: red; */
                    
                            & > .content{
                                height: 90%;
                                width: 100%;
                                display: flex;
                                justify-content: center;
                                /* border: 1px solid black; */
                                /* background-color: lightgray; */
                            }
                    }   
                    
                    & > .list {
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 50px;
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

    const str = sessionStorage.getItem("loginMemberVo");
    const vo = JSON

    return (
        <StyledNoticeDetailDiv>
            <div className='notice_wrap'>
                <div className='notice'>공지사항</div>
                <form action="">
                    <div className="dropdown_head">
                        <div className="date">2024.01.14</div>
                        <div className="notice_title">[공지] 유저에게 알리는 소식</div>
                    </div>
                    <div className='none'></div>
                    <div className='dropdown_content'>
                        <div className="content">
                            <textarea name="content" id="content" cols="120" rows="30"></textarea>
                        </div>
                    </div>
                    <div className='list'><a href='http://localhost:3000/admin/notice/list'>목록보기</a></div>
                </form>
            </div>
        </StyledNoticeDetailDiv>
    );
};

export default AdminNoticeDetail;