import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { ErrorPage, Home, PageNotFound } from './pages';
import { ERROR_ROUTE, HOME_ROUTE } from './constants/routes';

const App = () => {
    return (
        <div data-testid='app'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={`${HOME_ROUTE}`} element={<Home />} /> 
                    <Route path={`/${ERROR_ROUTE}/:errorCode?`} element={<ErrorPage />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
