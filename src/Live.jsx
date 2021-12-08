import React from 'react';
import Background from './Background';
import logo from "../src/img/logo.png"
import Navbar from './Navbar';
const Live = () => {

    return(
        <>
        <Background/>
        <Navbar imgsrc={logo} line="Live Scores" item1="Teams" item2="News" item1to="/" item2to="/"/>
        
        <div className="row">
            <div className="col-12">
               
            </div>
            <div className="col-12">
            </div>
        </div>
        </>
    )
}

export default Live;