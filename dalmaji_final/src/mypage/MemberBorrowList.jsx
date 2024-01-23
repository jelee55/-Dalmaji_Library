import styled from 'styled-components';

const StyledUserBorrowListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 0.3fr 1.5fr 1fr 8fr 2fr;
    place-items: center center;
    & > div {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center center;
    }
    
`;

const MemberBorrowList = () => {

    console.log("MemberBorrowMypage render ~~~~");

    return (
        <StyledUserBorrowListDiv>
            <div>1</div>
            <div><h1>내서재</h1></div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>도서번호</th>
                            <th>책 제목</th>
                            <th>저자</th>
                            <th>출판사</th>
                            <th>대출일</th>
                            <th>반납일</th>
                            <th>연체횟수</th>
                            <th>상태</th>
                            <th>제한사항</th>
                        </tr>
                    </thead>
                    <tbody>
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
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='pagination'>
                페이징 처리
            </div>
            <div>5</div>
        </StyledUserBorrowListDiv>
    );
};

export default MemberBorrowList;