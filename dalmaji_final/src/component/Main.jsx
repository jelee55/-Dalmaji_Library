import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ErrorPageNotFound from '../error/ErrorPageNotFound';
import HomeMain from '../home/HomeMain';
import AdminMyPage from '../mypage/AdminMyPage';
import SearchDetail from '../search/SearchDetail';
import SearchList from '../search/SearchList';
import MypageLogin from '../mypage/MypageLogin';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeMain />}></Route>
            <Route path='/notice/*' element={<b>공지사항</b>}></Route>
            <Route path='/search/*' element={<SearchList/>}></Route>
            <Route path='/mypage/*'></Route>
            <Route path='/mypage/*' element={<MypageLogin />}></Route>
            <Route path='*' element={ <ErrorPageNotFound /> }></Route>
            <Route path='/admin/*' element={<AdminMyPage />}></Route>
            <Route path='/search/detail' element={<SearchDetail />}></Route>
        </Routes>
    );
};

export default Main;