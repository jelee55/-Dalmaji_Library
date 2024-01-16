import React from 'react';
import styled from 'styled-components';

const StyledNoticeWriteDiv = styled.div`
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
                margin: auto;
                margin-top: 3%;
                justify-content: flex-start;
                border-bottom: 2px solid black;
                font-size:24px;
                font-weight: bolder;
                /* background-color: greenyellow; */
            }

            & > .none1 {
                height: 5%;
                /* background-color: yellow; */
            }

            & > form {
                width: 1000px;
                height: 80%;
                margin: auto;
                border: 2px solid black;
                /* background-color: beige; */

                & > .dropdown_head {    
                    width: 80%;
                    height: 10%;
                    margin: auto;
                    margin-top: 20px;
                    /* background-color: greenyellow; */

                    &> .date {
                        width: 50%;
                        height: 50%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        margin-top: 10px;
                        margin-left: 10%;
                        font-size: 15px;
                        /* background-color: azure; */
                        }
        
                    & > .notice_title{
                        /* width: 50%;
                        height: 50%; */
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        margin: auto;
                        /* margin-left: 10%; */
                        /* background-color: aqua; */
                        }
                    }

                    & > .none2 {
                    height: 4%;
                    /* background-color: yellow; */
                    }

                    
                    & > .content{
                        height: 60%;
                        width: 80%;
                        margin: auto;
                        border: 1px solid gray;
                        justify-content: center;

                        & > textarea {
                            height: 100%;
                            width: 100%;
                            /* background-color: lightgray; */
                        }
                    } 
                    
                    & > .update {
                        /* height: 35px; */
                        display: flex;
                        margin-top: 40px;
                        background-color: yellow;

                        .update > ul{
                            display: inline-flex;
                            margin-left: 90%;
                        }
                    }

                
    
            }

        }

        
`;

const AdminNoticeWrite = () => {

    const str = sessionStorage.getItem("loginMemberVo");
    const vo = JSON

    return (
        <StyledNoticeWriteDiv>
            <div className='notice_wrap'>
                <div className='notice'>공지사항</div>
                <div className='none1'>빈칸</div>
                <form action="">
                    <div className="dropdown_head">
                        <div className="date">2024.01.14</div>
                        <div className="notice_title">
                            <textarea name="ntitle" id="notice_title" cols="300" rows="5"></textarea>
                        </div>
                    </div>
                    <div className='none2'></div>
                    <div className="content">
                    <textarea name="content" id="content" cols="120" rows="30" placeholder=' 내용을 입력하세요'></textarea>
                    </div>
                    <div className="update">
                        <ul>
                            <li id="update_detail"><input type="submit" value="올리기" /></li>
                            <li id="update_detail"><input type="submit" value="취소" /></li>
                        </ul>
                    </div>
                </form>
            </div>
        </StyledNoticeWriteDiv>
    );
};

export default AdminNoticeWrite;