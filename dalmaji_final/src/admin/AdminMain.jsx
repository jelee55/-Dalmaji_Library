import React from 'react';
import SearchAdminDelete from '../search/SearchAdminDelete';
import AdminMyPage from './AdminMyPage';
import { Route, Routes } from 'react-router-dom';
import SearchAdminEdit from '../search/SearchAdminEdit';
import AdminNoticeList from './AdminNoticeList';
import AdminNoticeWrite from './AdminNoticeWrite';
import AdminNoticeEdit from './AdminNoticeEdit';

const AdminMain = () => {
    return (
        <Routes>
            <Route path='/mypage/*' element={<AdminMyPage />}></Route>
            <Route path='/edit/*' element={<SearchAdminEdit />}></Route>
            <Route path='/delete/*' element={<SearchAdminDelete />}></Route>
            <Route path='/notice/list/*' element={<AdminNoticeList />}></Route>
            <Route path='/notice/write/*' element={<AdminNoticeWrite />}></Route>
            <Route path='/notice/edit/*' element={<AdminNoticeEdit />}></Route>
        </Routes>
    );
};

export default AdminMain;