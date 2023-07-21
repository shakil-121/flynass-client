import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import UserInformation from './UserInformation';
import { useState } from 'react';

const ManageUsers = () => {
    const [showModal, setShowModal] = useState(false);

    // all user data
    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-pppins'>Manage Users</h1>
            <div>
                <table className="table lg:w-full overflow-x-auto">
                    <tr className='text-center bg-gray-400 text-black grid md:grid-cols-5'>
                        <th>No.</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>User Info</th>
                        <th>Delete</th>
                    </tr>
                </table>
                {
                    allUsers.map((user, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-5 mb-5 justify-items-center items-center shadow-lg text-xl font-josefin p-2' key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => setShowModal(user._id)} className="btn btn-info">Info</button>
                        </td>
                        <td><FaTrashAlt /></td>
                    </tr>)
                }
            </div>
            <UserInformation isVisible={showModal} onClose={() => setShowModal(false)} allUsers={allUsers}></UserInformation>
        </div>
    );
};

export default ManageUsers;