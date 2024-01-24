import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBook } from "@fortawesome/free-solid-svg-icons";
// import { faLock } from "@fortawesome/free-solid-svg-icons";
// import { faList } from "@fortawesome/free-solid-svg-icons";
// import Modal from "react-modal";


const StyledAdminEditDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 8fr 1.5fr;
    place-items: center center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`;

const StyledEditContentDiv = styled.div`
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 5fr 3fr 1fr;
    /* background-color: #aaee9d;//지워 */
    & > div:first-child {
        border-bottom: 5px solid #2f2f49;
        /* background-color: #52624e;//지워 */
    }
    & > div:first-child > h1 {
            margin-top: 50px;
            margin-left: 10px;
            margin-bottom: 10px;
            font-size: 40px;
            /* background-color: #8787bc; //지워 */
        }
    & > form > div {
        width: 100%;
        height: 100%;
        margin: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: #8787bc; //지워 */
        & > div {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            & > .title{
                /* background-color: #dd9999; */
                font-size: 33px;
            }   
            & > div {
                margin-right: 30%;
                margin-top: 10%;
                font-size: 24px;
                & > input{
                    border-radius: 5px;
                    border: 1px solid black;
                }
            
            }
            
        }
        

        & > div > img{
            width: 350px;
            height: 500px;
            margin-right: 20%;
            margin-bottom: 10px;
            background-color: #bbbbbb;
            
        }
        
    }
& > div > div > .inptContentDiv {
                margin-left: 4%;
                /* background-color: red; */
            }    
  & > div > div > .btnImg1{
    margin-top: 5%;
    border-radius: 10px;
    margin-right: 20%;
    background-color: #2f2f49;
    border: none;
    color: white;
  }
`;

const StyledTableDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div:first-child {
        width: 100%;
        height: 50px;
        padding: 10px;
        font-size: 27px;
        background-color: #D9F1FF;

    }
    & > table {
        text-align: center;
        margin-top: 20px;
        width: 100%;
        height: 30%;
        & > thead {
            background-color: #EFEFF1;
            & > tr {
            width: 100%;
            height: 50px;
            }   
        }
        & > tbody > tr {
            width: 100%;
            height: 30px;
        }
    }
    &> div:nth-child(3) {
        display: flex;
        gap: 15px;
        & > button:first-child {
            width: 110px;
            height: 35px;
            font-size: 18px;
            margin-top: 30px;
            background-color: #275FBC;
            border: none;
            border-radius: 7px;
            color: white;
            cursor: pointer;
        }
        & > .redirect {
            width: 110px;
            height: 35px;
            font-size: 18px;
            margin-top: 30px;
            background-color: #666666;
            border: none;
            border-radius: 7px;
            color: white;
            cursor: pointer;
        }
        & > button:hover{
            filter: brightness(150%);
        }

    }
`;

// const StyledModalDiv = styled.div`
//     z-index: 100;
//     width: 500px;
//     height: 400px;
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: auto;
//     background-color: white;
//     box-shadow: 3px 3px 6px 2px rgba(169, 169, 169, 0.5);
//     border-radius: 20px;
//     display: grid;
//     grid-template-rows: 1.5fr 1fr 1fr 1fr;
//     place-items: center center;
//     & > div:first-child {
//         width: 100%;
//         height: 100%;
//         text-align: center;
//         background-color: #EFEFF1;
//         padding-top: 40px;
//         border-top-left-radius: 20px;
//         border-top-right-radius: 20px;
//     }
//     & > div:nth-child(2) {
//         font-size: 25px;
//     }
//     & > input {
//         width: 200px;
//         height: 40px;
//         font-size: 25px;
//         padding-left: 7px;
//     }
//     & > input:focus {
//         background-color: #7b7b7b;
//         color: white;
//     }
//     & > div:nth-child(4) {
//         display: flex;
//         gap: 5px;
//         & > button {
//             width: 50px;
//             height: 30px;
//             border: none;
//             border-radius: 7px;
//             background-color: #275FBC;
//             color: white;
//             cursor: pointer;
//         }
//         & > button:hover {
//             background-color: #E72900;
//         }
//     }
// `;


const SearchAdminEdit = () => {
    console.log("SearchAdminEdit render!!!");

    //url에서 bookNo 추출
    const selectedBookNo = useParams();
    console.log("selectedBookNo ::: ", selectedBookNo);
    console.log("selectedBookNo.bookNo ::: ", selectedBookNo.bookNo);

    // 사용할 변수 준비
    const [vo, setVo] = useState([]);
    const [borrowVo, setBorrowVo] = useState([]);

    useEffect( () => {
        const loadBookDetailVo = () => {
            fetch(`http://127.0.0.1:8888/app/search/book/detail?bookNo=${selectedBookNo.bookNo}`,{
                    method: "GET",
                        headers: {
                            "Content-Type" : "application/json",
                        },
                })
            .then( resp => resp.json() )
            .then( (data) => {
                console.log('data:::', data);
                setVo(data.vo);
                setBorrowVo(data.borrowVo);
            })
            ;
        }
        loadBookDetailVo();
    }, [selectedBookNo.bookNo] )

    // // 모달창을 위한 준비
    // const [modal, setModal] = useState(false);

    // 목록버튼 클릭시 돌아가기
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

    return (
        <StyledAdminEditDiv>
            <div></div>
            <StyledEditContentDiv>
            <div><h1>수정하기</h1></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <img src={vo.bookImg} alt={vo.title} />
                        <button className='btnImg1'>이미지</button>
                    </div>
                    <div className='inputContent'>
                        <div className='inptContentDiv'><strong>제목: </strong><input type="text" /></div>
                        <div className='inptContentDiv'><strong>작가: </strong><input type="text" /></div>
                        <div><strong>출판사: </strong><input type="text" /></div>
                        <div><strong>출판일: </strong><input type="text" /></div>
                        <button className='btnImg1'>완료</button>
                        <button className='btnImg1'>삭제</button>
                    </div>
                </div>
            </form>
               
                <StyledTableDiv>
                    <div>소장정보</div>
                    <table>
                        <thead>
                            <tr>
                                <th>NO.</th>
                                <th>소장위치</th>
                                <th>도서상태</th>
                                <th>반납예정일</th>
                            </tr> 
                        </thead>
                        <tbody> 
                            <tr>
                                <td>{vo.bookNo}</td>
                                <td>{vo.roomName}</td>
                                <td>{borrowVo.bookState}</td>
                                {
                                    borrowVo === undefined
                                    ?
                                    <td></td>
                                    :
                                    <td>{borrowVo.dueDate}</td>
                                    
                                }
                            </tr>
                        </tbody>
                    </table>
                    {/* <div>
                       
                        <button onClick={ () => { setModal(!modal) } }><FontAwesomeIcon icon={faBook} /> 대출</button>
                        {modal === true 
                            ? 
                            <StyledModalDiv>
                                <div><h1>알림</h1></div>
                                <div> <FontAwesomeIcon icon={faLock} /> 대출 비밀번호를 입력해주세요.</div>
                                <input type="password" placeholder='password'/>
                                <div>
                                    <button>완료</button>
                                    <button onClick={ () => {setModal(false)} }>취소</button>
                                </div>
                            </StyledModalDiv> 
                            : 
                            null
                        }
                        <button className='redirect' onClick={redirect}><FontAwesomeIcon icon={faList} /> 목록으로</button>
                    </div> */}
                </StyledTableDiv>
                <div>4</div>
            </StyledEditContentDiv>
            <div></div>
        </StyledAdminEditDiv>
    );
};
}


export default SearchAdminEdit;