import React from 'react';
import { Route, Routes } from 'react-router-dom';

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