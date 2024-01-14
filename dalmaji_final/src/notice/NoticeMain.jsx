import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeList from './NoticeList';
import ErrorPageNotFound from '../error/ErrorPageNotFound';
import AdminNoticeWrite from '../admin/AdminNoticeWrite';
import AdminNoticeDetail from '../admin/AdminNoticeDetail';


const NoticeMain = () => {
    return (
        <Routes>
            <Route path='list' element={<NoticeList />}/>
            <Route path='write' element={<AdminNoticeWrite />}/>
            <Route path='detail' element={<AdminNoticeDetail />}/>
            <Route path='*' element={<ErrorPageNotFound />}/>
        </Routes>
    );
};

export default NoticeMain;