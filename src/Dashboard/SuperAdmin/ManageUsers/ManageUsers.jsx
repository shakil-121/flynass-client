import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import UserInformation from './UserInformation';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [showModal, setShowModal] = useState(false);

    // all user data
    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleUserDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be Delete  this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        refetch();
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "User has been delete.", "success");
                        }
                    });
            }
        });
    };

    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-pppins mb-5'>Manage Users</h1>
            <div>
                <table className="table lg:w-full overflow-x-auto">
                    <tr className='text-center bg-[#1E62D4] text-white grid md:grid-cols-5'>
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
                            <button onClick={() => setShowModal(user._id)} className="btn bg-[#1E62D4] text-white">Info</button>
                        </td>
                        <td>
                            <button onClick={() => handleUserDelete(user._id)}><FaTrashAlt className='text-[#D53343]' /></button>
                        </td>
                    </tr>)
                }
            </div>
            <UserInformation isVisible={showModal} onClose={() => setShowModal(false)} allUsers={allUsers}></UserInformation>
        </div>
    );
};

export default ManageUsers;