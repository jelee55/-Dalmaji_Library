import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBook } from "@fortawesome/free-solid-svg-icons";
// import { faLock } from "@fortawesome/free-solid-svg-icons";
// import { faList } from "@fortawesome/free-solid-svg-icons";
// import Modal from "react-modal";


const StyledAdminWriteDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 8fr 1.5fr;
    place-items: center center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`;

const StyledWriteContentDiv = styled.div`
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
    & > form > div{
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
    & > form > div > div > .inptContentDiv {
        margin-left: 4%;
        /* background-color: red; */
    }    
    & > form > div > div > .btnImg1{
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

const SearchDetail = () => {
    const str = sessionStorage.getItem("BookVo");
    const vo = str ? JSON.parse(str) : {}; // 만약 str이 null이면 빈 객체를 할당
    
    const bookNo = vo.no;


    const [inputBookVo, setInputBookVo] = useState({
        bookNo: bookNo,
        title: "",
        author: "",
        company: "",
        publisherYear: "",
      });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

            fetch(`http://127.0.0.1:8888/app/admin/write`,{
                    method: "POST",
                        headers: {
                            "Content-Type" : "application/json",
                        },
                        body : JSON.stringify(inputBookVo) ,
                })
            .then( resp => resp.json() )
            .then( (data) => {
                if(data.msg === "good"){
                    alert("게시글 작성 성공 !");
                    navigate("/search/list");
                }else{
                    alert("게시글 작성 실패 ...");
                }
            })
            ;
        }
   
        const handleChangeInput = (event) => {
            const {name, value} = event.target;
    
            setInputBookVo({
                ...inputBookVo ,
                [name]:value,
            });
            
            
        }
    
    return (
        <StyledAdminWriteDiv>
            <div></div>
            <StyledWriteContentDiv>
                <div><h1>작성하기</h1></div>
                <form onSubmit={handleSubmit}>
                    <div >
                        <div>
                            <img src={vo.bookImg} alt={vo.title} />
                            <button className='btnImg1'>이미지</button>
                        </div>
                        <div className='inputContent'>
                            <div className='inptContentDiv'>
                                <strong>제목: </strong>
                                <input type="text" name='title' onChange={handleChangeInput}/>
                            </div>
                            <div className='inptContentDiv'>
                                <strong>작가: </strong>
                                <input type="text" name='author' onChange={handleChangeInput} />
                            </div>
                            <div>
                                <strong>출판사: </strong>
                                <input type="text" name='company' onChange={handleChangeInput}/>
                            </div>
                            <div>
                                <strong>출판일: </strong>
                                <input type="text" name="publisherYear" onChange={handleChangeInput}/>
                            </div>
                            <input type="submit" value="완료" className='btnImg1' />
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
                            {/* <tr>
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
                            </tr> */}
                        </tbody>
                    </table>
                </StyledTableDiv>
                <div>4</div>
            </StyledWriteContentDiv>
            <div></div>
        </StyledAdminWriteDiv>
    );
};

export default SearchDetail;