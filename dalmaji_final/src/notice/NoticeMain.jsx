import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeList from './NoticeList';
import NoticeDetail from './NoticeDetail';
import AdminNoticeWrite from '../admin/AdminNoticeWrite';
import AdminNoticeDetail from '../admin/AdminNoticeDetail';
import ErrorPageNotFound from '../error/ErrorPageNotFound';


const NoticeMain = () => {
    return (
        <Routes>
            <Route path='list' element={<NoticeList />}/>s
            <Route path='detail' element={<NoticeDetail />}/>
            <Route path='write' element={<AdminNoticeWrite />}/>
            <Route path='detail' element={<AdminNoticeDetail />}/>
            <Route path='*' element={<ErrorPageNotFound />}/>
        </Routes>
    );
};

export default NoticeMain;