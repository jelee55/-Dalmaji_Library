import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeDetail from './NoticeDetail';
import AdminNoticeWrite from '../admin/AdminNoticeWrite';
import AdminNoticeDetail from '../admin/AdminNoticeDetail';
import ErrorPageNotFound from '../error/ErrorPageNotFound';
import NoticeList from './NoticeList';


const NoticeMain = () => {
    return (
        <Routes>
            <Route path='list' element={<NoticeList />}/>
            {/* <Route path='list' element={<AdminNoticeList />}/> */}
            <Route path='detail' element={<NoticeDetail />}/>
            <Route path='detail' element={<AdminNoticeDetail />}/>
            <Route path='write' element={<AdminNoticeWrite />}/>
            <Route path='*' element={<ErrorPageNotFound />}/>
        </Routes>
    );
};

export default NoticeMain;