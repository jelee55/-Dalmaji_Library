import React from 'react';
import SearchAdminDelete from '../search/SearchAdminDelete';
import AdminMyPage from '../mypage/AdminMyPage';
import { Route, Routes } from 'react-router-dom';
import SearchAdminEdit from '../search/SearchAdminEdit';

const AdminMain = () => {
    return (
        <Routes>
            <Route path='/myoage/*' element={<AdminMyPage />}></Route>
            <Route path='/edit/*' element={<SearchAdminEdit />}></Route>
            <Route path='/delete/*' element={<SearchAdminDelete />}></Route>
        </Routes>
    );
};

export default AdminMain;