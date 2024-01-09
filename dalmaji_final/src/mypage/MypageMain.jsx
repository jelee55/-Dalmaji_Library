import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPageNotFound from '../error/ErrorPageNotFound';
import MypageJoin from './MypageJoin';
import MypageLogin from './MypageLogin';

const MypageMain = () => {
    return (
            <Routes>
                <Route path='/mypage' element={<MypageMain />}/>
                <Route path='/join' element={<MypageJoin />}/>
                <Route path='/edit' element={<MemberEdit />}/>
                <Route path='/login' element={<MypageLogin />}/>
                <Route path='*' element={<ErrorPageNotFound />}/>
            </Routes>
    );
};

export default MypageMain;