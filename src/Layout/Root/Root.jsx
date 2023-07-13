import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
           <Outlet/> 
           <Footer></Footer>
        </div>
    );
};

export default Root;