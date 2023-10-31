import React from 'react';
import Lottie from "lottie-react";
import error from "../../../public/underdevelopment.json"
import { Link } from 'react-router-dom';

const  UnderDevelopment= () => {
    return (
        <div>
            <Lottie className='h-96' animationData={error} loop={true} /> 
            <h1 className='text-5xl text-center py-4  font-pppins'>Service Not Available</h1>
        </div>
    );
};

export default UnderDevelopment;