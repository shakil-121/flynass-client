import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import UnderDevelopment from '../../Pages/Error/UnderDevelopment';

const Root = () => {
    return (
        <div>
            {/* <UnderDevelopment></UnderDevelopment> */}
           <NavBar></NavBar>
            <Outlet/> 
           <Footer></Footer>
        </div>
    );
};

export default Root;