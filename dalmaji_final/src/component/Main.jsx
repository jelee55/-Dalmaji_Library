import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ErrorPageNotFound from '../error/ErrorPageNotFound';
import HomeMain from '../home/HomeMain';
import AdminMyPage from '../mypage/AdminMyPage';
import SearchDetail from '../search/SearchDetail';
import SearchList from '../search/SearchList';
import AdminNoticeList from '../notice/AdminNoticeList';
import MypageMain from '../mypage/MypageMain';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeMain />}></Route>
            <Route path='/notice/*' element={<AdminNoticeList/>}></Route>
            <Route path='/search/*' element={<SearchList/>}></Route>
            <Route path='/mypage/*'></Route>
            <Route path='/member/*' element={<MypageMain />}></Route>
            <Route path='*' element={ <ErrorPageNotFound /> }></Route>
            <Route path='/admin/*' element={<AdminMyPage />}></Route>
            <Route path='/search/detail' element={<SearchDetail />}></Route>
        </Routes>
    );
};

export default Main;