import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './League1.js';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
    <>

    <BrowserRouter>
    <App />
    </BrowserRouter>

    </>
, document.getElementById("root"));