import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const AdminPrivate = ({children}) => {
    const {user,loadding}=useAuth()
    const navigate=useNavigate();
    const location=useLocation()
    
    if(loadding)
    {
        return <progress className="progress w-56"></progress>;
   
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/admin_login" replace></Navigate>

};

export default AdminPrivate;