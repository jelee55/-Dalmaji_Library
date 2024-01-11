import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchList from './SearchList';
import SearchDetail from './SearchDetail';
import SearshAdminEdit from './SearshAdminEdit';
import SearchAdminDelete from './SearchAdminDelete';
import ErrorPageNotFound from './ErrorPageNotFound';

const SearchMain = () => {
    return (
        <Routes>
            <Route path='list' element={<SearchList />}/>
            <Route path='detail' element={<SearchDetail />}/>
            <Route path='admin/edit' element={<SearshAdminEdit />}/>
            <Route path='admin/delete' element={<SearchAdminDelete />}/>
            <Route path='*' element={<ErrorPageNotFound />}/>

        </Routes>
    );
};

export default SearchMain;