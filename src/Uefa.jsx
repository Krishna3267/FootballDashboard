import React from 'react';
import Background from './Background';
import Navbar from './Navbar';
import Timeline from './Timeline';
const Uefa = () => {

    return(
        <>
        <Background/>
        <Navbar imgsrc="https://seeklogo.com/images/N/new-uefa-europa-league-logo-E42A457432-seeklogo.com.png" line="UEFA EUROPA" item1="Teams" item2="News" item1to="/" item2to="/"/>
        
        <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
               <Timeline />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <h1>Hello</h1>
            </div>
        </div>
        </>
    )
}

export default Uefa;