import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledAdminBorrowListDiv = styled.div`
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

const AdminBorrowVoList = () => {
    //fetch 이용해 데이터 준비
    const [adminBorrowVoList, setAdminBorrowVoList] = useState([]);
    const loadAdminBorrowVoList = () => {
        fetch("http://127.0.0.1:8888/app/admin/borrow/list")
        .then( resp => resp.json() )
        .then( (x) => { setAdminBorrowVoList(x); } )
        ;
    }

    useEffect( () => {
        loadAdminBorrowVoList();
    } );
};

const AdminMyPage = () => {
    return (
        <StyledAdminBorrowListDiv>
            <div>빈칸</div>
            <div><h1>유저 대출/반납 기록</h1></div>
            <div>검색기능 구현한다면.....</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>도서번호</th>
                            <th>책 제목</th>
                            <th>저자</th>
                            <th>출판사</th>
                            <th>사용자 번호</th>
                            <th>사용자 이름</th>
                            <th>대출일</th>
                            <th>반납일</th>
                            <th>연체횟수</th>
                            <th>상태</th>
                            <th>제한사항</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AdminBorrowVoList.length === 0
                            ?
                            <h1>로딩중...</h1>
                            :
                            adminBorrowVoList.map( vo => <tr>
                                <td>{vo.overdueNo}</td>
                                <td>{vo.title}</td>
                                <td>{vo.overdueNo}</td>
                                <td>{vo.overdueNo}</td>
                                <td>{vo.overdueNo}</td>
                                <td>{vo.overdueNo}</td>
                                <td>{vo.overdueNo}</td>
                                <td>{vo.overdueNo}</td>
                                <td>{vo.overdueNo}</td>
                            </tr>
                            )
                        }
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>빈칸</div>
        </StyledAdminBorrowListDiv>
    );
};

export default AdminMyPage;