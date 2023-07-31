import React from 'react';
import Lottie from "lottie-react";
import error from "../../../public/404.json"
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Lottie className='h-96' animationData={error} loop={true} /> 
            <h1 className='text-xl text-center py-4 text-red-600 font-pppins'>Page Not Found !</h1>
            <div className='flex justify-center'>
                <Link to="/" className='btn btn-primary px-10'>Home</Link>
            </div>
        </div>
    );
};

export default Error;