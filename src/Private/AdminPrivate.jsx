import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Lottie from "lottie-react";
import flying from "../../public/loading.json";

const AdminPrivate = ({ children }) => {
    const { user, loadding } = useAuth()
    const navigate = useNavigate();
    const location = useLocation()

    if (loadding) {
        return <div className='flex justify-center items-center h-[100vh]'>
            <div>
                <Lottie
                    className="opacity-70 w-56"
                    animationData={flying}
                    loop={true}
                />
                <h1 className='font-pppins'>Flynass is Loading...</h1>
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/admin_is_flyning" replace></Navigate>

};

export default AdminPrivate;