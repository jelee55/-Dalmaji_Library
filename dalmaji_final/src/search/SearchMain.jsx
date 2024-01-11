import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchList from './SearchList';
import SearchDetail from './SearchDetail';



const SearchMain = () => {
    return (
        <Routes>
            <Route path='list' element={<SearchList />}/>
            <Route path='detail' element={<SearchDetail />}/>
           

        </Routes>
    );
};

export default SearchMain;