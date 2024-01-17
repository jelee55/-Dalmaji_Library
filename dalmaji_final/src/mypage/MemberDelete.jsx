import React from 'react';
import styled from 'styled-components';

const StyledDeleteMainDiv = styled.div`
    width: 80%;
    height: 80%;
    display: grid;
    place-items: center center;
    /* background-color: aqua; */

    & > .img {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
        /* background-color: red; */

        & > img {
            height: 150px;
            width: 150px;
            /* margin-top: 400px; */
        }

    }

    & > .userdelete {
        width: 100%;
        height: 100%;
        /* background-color: lightblue; */

        & > .delete {
            height: 40%;
            width: 60%;
            margin-bottom: 25%;
            margin-left: 20%;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
    
            & > .title {
                height: 50px;
                display: flex;
                justify-content: center;
                margin: auto;
                margin-top: 20px;
                align-items: center;
                font-size: 30px;
                /* background-color: yellow; */
            }
    
            & > .title2 {
                height: 70%;
                width: 98%;
                display: flex;
                margin: auto;
                align-items: center;
                /* background-color: green; */
            }
    
        }

        & > form {
            width: 100%;
            height: 100%;
            /* background-color: beige; */

            & > form > .delete_box {
                background-color: beige;
            }
        }
    

    }


    
`;

const MemberDelete = () => {
    return (
        <StyledDeleteMainDiv>
            <div className='img'><img src="/images/header/logo.png" alt="로고" /></div>
            <div className='userdelete'>
                <div className='delete'>
                    <div className='title'>회원탈퇴</div>
                    <div className='title2'>
                        달마당 도서관 회원탈퇴 안내입니다.
                        <br/><br />
                        회원탈퇴를 원하시면 하단의 '회원탈퇴'를 이용해주세요.
                        <br /><br />
                        대출 중인 도서가 있으면 탈퇴처리가 불가능합니다.
                        <br /><br />
                        대출 정지기간인 경우 대출 정지 기간이 경과한 후 탈퇴가 가능합니다.
                    </div>
                    <form>
                        <div className='delete_box'>
                            <div>회탈퇴회원정보</div>
                            <div>어쩌구</div>
                        </div>
                    </form>
                </div>
            </div>
        </StyledDeleteMainDiv>
    );
};

export default MemberDelete;