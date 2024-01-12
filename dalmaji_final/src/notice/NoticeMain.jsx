import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNoticeList from './AdminNoticeList';
import AdminNoticeDetail from './AdminNoticeDetail';
import AdminNoticeWrite from './AdminNoticeWrite';
import AdminNoticeEdit from './AdminNoticeEdit';
import NoticeList from './NoticeList';
import ErrorPageNotFound from '../error/ErrorPageNotFound';


const NoticeMain = () => {
    return (
        <Routes>
            <Route path='admin/list' element={<AdminNoticeList />}/>
            <Route path='list' element={<NoticeList />}/>
            <Route path='admin/write' element={<AdminNoticeWrite />}/>
            <Route path='admin/detail' element={<AdminNoticeDetail />}/>
            <Route path='admin/edit' element={<AdminNoticeEdit />}/>
            <Route path='*' element={<ErrorPageNotFound />}/>
        </Routes>
    );
};

export default NoticeMain;