import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeList from './NoticeList';
import ErrorPageNotFound from '../error/ErrorPageNotFound';


const NoticeMain = () => {
    return (
        <Routes>
            <Route path='list' element={<NoticeList />}/>
            <Route path='*' element={<ErrorPageNotFound />}/>
        </Routes>
    );
};

export default NoticeMain;