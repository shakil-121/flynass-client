import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const AdminPrivate = ({ children }) => {
    const { user, loadding } = useAuth()
    const navigate = useNavigate();
    const location = useLocation()

    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const loggedInUser = user?.email;
    const currentUser = allUsers.find(item => item.email === loggedInUser)
    const role = currentUser?.role;

    if (loadding) {
        return <progress className="progress w-56"></progress>;
    }
    if (role === 'admin' || 'superAdmin') {
        return children;
    }
    if (role === 'marchent') {
        navigate('/login');
        return null;
    }
    return <Navigate state={{ from: location }} to="/admin_login" replace></Navigate>

};

export default AdminPrivate;