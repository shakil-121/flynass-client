import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import loading from "../../public/loading.json";

const Private = ({ children }) => {
    const { user, loadding } = useAuth()
    const navigate = useNavigate();
    const location = useLocation()

    if (loadding) {
        return <div className='flex justify-center items-center h-[100vh]'>
            <div>
                <Lottie
                    className="opacity-70 w-56"
                    animationData={loading}
                    loop={true}
                />
                <h1 className='font-pppins'>Flynass is Loading...</h1>
            </div>
        </div>

    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>

};

export default Private;