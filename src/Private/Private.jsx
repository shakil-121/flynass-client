import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Private = ({children}) => {
    const {user}=useAuth()
    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const loggedInUser = user?.email;
    const currentUser = allUsers.find(item => item.email === loggedInUser)
    const role = currentUser?.role;
    if(role==="marchent")
    {
        return children;
    } 
    else{
        return <h1>you are not merchant</h1>
    }

};

export default Private;