import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNoticeList from './AdminNoticeList';
import AdminNoticeDetail from './AdminNoticeDetail';
import AdminNoticeWrite from './AdminNoticeWrite';
import AdminNoticeEdit from './AdminNoticeEdit';


const NoticeMain = () => {
    return (
        <Routes>
            <Route path='list' element={<AdminNoticeList />}/>
            <Route path='write' element={<AdminNoticeWrite />}/>
            <Route path='detail' element={<AdminNoticeDetail />}/>
            <Route path='edit' element={<AdminNoticeEdit />}/>
        </Routes>
    );
};

export default NoticeMain;