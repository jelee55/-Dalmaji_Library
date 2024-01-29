import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

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
        
        /* & > div > input:nth-child(1){
            width: 350px;
            height: 500px;
            margin-right: 20%;
            margin-bottom: 10px;
            background-color: #bbbbbb;
            
        } */
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

    & > div:nth-child(3) {
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

        & > button:hover {
            filter: brightness(150%);
        }
    }
`;

const SearchAdminEdit = () => {
    console.log("SearchAdminEdit render!!!");

    // const vo = location.state.vo;
    const location = useLocation();

    const [vo , setVo] = useState(location.state.vo);
    const [fileObj,setFileObj] = useState();
    const [previewImage, setPreviewImage] = useState(null);


    console.log("vo :::", vo);
    //url에서 bookNo 추출
    const selectedBookNo = useParams();
    console.log("selectedBookNo ::: ", selectedBookNo);
    console.log("selectedBookNo.bookNo ::: ", selectedBookNo.bookNo);

    const handleChangeFile = (e) => {
        setFileObj(e.target.files[0]);
    };

    // 이미지 미리보기 생성
    useEffect (() =>{
    
    const reader = new FileReader();
    reader.onloadend = () => {
        setPreviewImage(reader.result);
    };
    if(fileObj){
        reader.readAsDataURL(fileObj);
    }
}, [fileObj]);

    


    // 사용할 변수 준비
    // const [vo, setVo] = useState([]);
    const [bookVo, setBookVo] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        company: '',
        publisherYear: '',
        fileObj: '',
    });

    // handleChangeInput 함수 정의
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        // setFormData({
        //     ...formData,
        //     [name]: value,
        // });
        setVo({
            ...vo,
            [name] : value,
        })
    };

    // useEffect(() => {
    // //     const loadBookDetailVo = () => {
    //         fetch(`http://127.0.0.1:8888/app/admin/edit`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body : JSON.stringify(selectedBookNo)
    //         })
    //             .then(resp => resp.json())
    //             .then((data) => {
    //                 console.log('data:::', data);
    //                 setVo(data.vo);
    //                 setBookVo(data.bookVo);
    //             });
    //     }
    //     loadBookDetailVo();
    // }, [selectedBookNo.bookNo])


    // 목록버튼 클릭시 돌아가기
    const navigate = useNavigate();

   // handleSubmit 함수 정의
    // useEffect(()=>{
        const handleSubmit = (event) => {
            event.preventDefault();
            fetch(`http://127.0.0.1:8888/app/admin/edit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify(vo)
            })
            .then(resp => resp.json())
            .then((data) => {
                console.log('data :::' , data);
                // setVo(data.vo);
                // setBookVo(data.bookVo);
            });
        };
    // },[])
    return (
        <StyledAdminEditDiv>
            <div></div>
            <StyledEditContentDiv>
                <div><h1>수정하기</h1></div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <img src={vo.bookImg} alt={vo.title} />
                            <button className='btnImg1'>이미지 첨부</button>
                            {/* {previewImage && <img src={previewImage} alt="Preview" style={{ width: '100px', height: '100px' }} />}
                            <input type="file" multiple name='f'onChange={handleChangeFile}/> */}
                        </div>
                        <div className='inputContent'>
                            <div className='inptContentDiv'>
                                <strong>제목: </strong>
                                <input type="text" name='title' value={vo.title} onChange={handleChangeInput} />
                            </div>
                            <div className='inptContentDiv'>
                                <strong>작가: </strong>
                                <input type="text" name='author' value={vo.author} onChange={handleChangeInput} />
                            </div>
                            <div>
                                <strong>출판사: </strong>
                                <input type="text" name='company' value={vo.company} onChange={handleChangeInput} />
                            </div>
                            <div>
                                <strong>출판일: </strong>
                                <input type="text" name="publisherYear" value={vo.publisherYear} onChange={handleChangeInput} />
                            </div>
                            <input type="submit" value="완료" className='btnImg1' />
                        </div>
                    </div>
                </form>
            </StyledEditContentDiv>
            <div></div>
        </StyledAdminEditDiv>
    );
};

export default SearchAdminEdit;
