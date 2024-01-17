import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

        & > .delete > form {
            width: 100%;
            height: 100%;
            display: ;
            margin: auto;
            margin-top: 70px;
            /* margin-bottom: 80px; */
            /* background-color: lightblue; */

            & > .delete_box {
                width: 50%;
                height: 70%;
                margin: auto;
                border: 1.5px solid black;
                /* background-color: beige; */

                & > .delete_title {
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    border-bottom: 1px solid black;
                    background-color: beige;
                }
                
            }
            
            & > .update {
                width: 25%;
                height: 40px;
                margin-top: 40px;
                margin-left: 37%;
                /* background-color: yellow; */

                & > ul {
                    display: flex;
                    justify-content: space-between;
                    /* margin: auto; */
                    list-style: none;

                    & > li > .u {
                        width: 90px;
                        height: 40px;
                        border-radius: 10%;
                        background-color: lightgray;
                        color: black;
                        font-family: 'Pretendard';
                        font-weight: 700;
                        font-size: 16px;
                    }

                    & > li > a >.c {
                        width: 90px;
                        height: 40px;
                        border-radius: 10%;
                        background-color: white;
                        font-family: 'Pretendard';
                        font-weight: 700;
                        font-size: 16px;
                    }
                }
            }

        }
    

    }


    
`;

const MemberDelete = () => {

    console.log("MemberList 컴포넌트 렌더링");

    const navigate = useNavigate();

    //fetch 를 이용해서 데이터 준비
    const [memberVoList,setMemberVoList] = useState([]);
    const loadMemberVoList = () => {
        fetch("http://127.0.0.1:8888/app/member/quit")
        .then( resp => resp.json() )
        .then( (x) => { setMemberVoList(x); })
        ;
    }

    useEffect(()=>{
        console.log("useEffect 호출됨~~~");
        loadMemberVoList();
    }, []);

    console.log("return 직전 -- (곧 렌더링 완료)");

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
                            <div className='delete_title'>탈퇴 회원정보</div>
                            <div className='delete_content'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>성명</th>
                                            <th>아이디</th>
                                            <th>탈퇴가능 여부</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            memberVoList.length === 0
                                            ?
                                            (<tr>
                                                <td colSpan="3">로딩중...</td>
                                            </tr>)
                                            :
                                            memberVoList.map( vo => <tr key={vo.no}>
                                                    <td>{vo.name}</td>
                                                    <td>{vo.id}</td>
                                                    <td>{vo.oNo}</td>
                                                </tr>
                                                )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="update">
                        <ul>
                            <li id="update_detail"><input type="submit" value="탈퇴" className='u' /></li>
                            <li id="update_detail"><a href=""><input type="submit" value="취소" className='c'/></a></li>
                        </ul>
                    </div>
                    </form>
                </div>
            </div>
        </StyledDeleteMainDiv>
    );
};

export default MemberDelete;