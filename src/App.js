import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { ErrorPage, Home, PageNotFound } from './pages';
import { ERROR_ROUTE, HOME_ROUTE } from './constants/routes';
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';

const App = () => {
    return (
        <div data-testid='app'>
           <BrowserRouter>
                <Routes>
                    <Route path={`${HOME_ROUTE}`} element={<EventList />} /> 
                    <Route path={`/event/:id`} element={<EventDetails />} />
                    <Route path='*' element={<PageNotFound />} />
                    <Route path={`${ERROR_ROUTE}`} element={<ErrorPage />} />
                </Routes>
                {/* <Footer/> */}
            </BrowserRouter>
        </div>
    );
};

export default App;
