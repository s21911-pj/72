import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PhotoDetails from "./photoDetails";
import AppContextProvider from "./ctx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App/>}/>
                <Route path="/details/:ident" exact element={<PhotoDetails/>}/>
            </Routes>
        </BrowserRouter>
    </AppContextProvider>
);
