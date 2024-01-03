import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ErrorPageNotFound from '../error/ErrorPageNotFound';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<b>홈</b>}></Route>
            <Route path='/notice/*' element={<b>공지사항</b>}></Route>
            <Route path='/search/*' element={<b>자료검색</b>}></Route>
            <Route></Route>
            <Route path='*' element={ <ErrorPageNotFound /> }></Route>
        </Routes>
    );
};

export default Main;