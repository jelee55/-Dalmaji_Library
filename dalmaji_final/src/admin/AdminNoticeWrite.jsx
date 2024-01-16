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
                justify-content: center;
                /* border-bottom: 2px solid black; */
                font-size:24px;
                font-weight: bolder;
                /* background-color: greenyellow; */
            }

            & > .none1 {
                height: 3%;
                /* background-color: yellow; */
            }

            & > form {
                width: 65%;
                height: 80%;
                margin: auto;
                border: 2px solid black;
                /* background-color: beige; */

                & > .title {    
                    width: 100%;
                    height: 15%;
                    margin: auto;
                    margin-top: 20px;
                    background-color: greenyellow;

                    & > .title > dl {
                        display: inline-block;
                        width: 50%;
                        vertical-align: middle;
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
                <div className='none1'></div>
                <form action="">
                    <div className="title">
                        <dl>
                            <dt>제목</dt>
                            <dd><input type="text" id='title' placeholder='제목 입력' /></dd>
                        </dl>
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