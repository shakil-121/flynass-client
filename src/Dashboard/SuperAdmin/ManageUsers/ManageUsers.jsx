import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaInfo, FaTrashAlt } from 'react-icons/fa';
import UserInformation from './UserInformation';
import { useState } from 'react';
import Swal from 'sweetalert2';
import NewMerchantRequest from './NewMerchantRequest';
import { baseUrl } from '../../../config/api';

const ManageUsers = () => {
    const [showModal, setShowModal] = useState(false);
    const [newMerchant, setNewMerchant] = useState(false);

    // all user data
    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${baseUrl}/users`)
        return res.json();
    })
    const TotalMerchant = allUsers.filter(users => users.role === 'merchant');

    const newRequest = allUsers.filter(users => users.role === 'pending');
    // console.log(TotalAdmin);

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
                fetch(`${baseUrl}/users/${id}`, {
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
        <div className='m-5'>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-pppins mb-10'>Manage Users</h1>
                <div className="indicator me-10">
                    <span className="indicator-item badge badge-secondary">{newRequest.length}+</span>
                    <button onClick={() => setNewMerchant(true)} className="btn bg-blue-800 hover:bg-blue-700 text-white">Request</button>
                </div>
            </div>
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
                    TotalMerchant.map((user, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-5 mb-5 justify-items-center items-center shadow-lg  font-josefin p-2' key={user._id}>
                        <td>{index + 1}</td>
                        <td className='w-32'>{user.name}</td>
                        {/* <td className='w-52 overflow-hidden'>
                            {user.email}
                        </td> */}

                        <td className='m-4 text-sm font-semibold' style={{ whiteSpace: 'normal', maxHeight: '2em', overflow: 'hidden' }}>
                            {user.email}
                        </td>

                        <td>
                            <button onClick={() => setShowModal(user._id)} className="btn bg-blue-800 hover:bg-blue-700 text-white"><FaInfo />Info</button>
                        </td>
                        <td>
                            <button onClick={() => handleUserDelete(user._id)}><FaTrashAlt className='text-[#D53343]' /></button>
                        </td>
                    </tr>)
                }
            </div>
            <UserInformation isVisible={showModal} onClose={() => setShowModal(false)} allUsers={allUsers}></UserInformation>
            <NewMerchantRequest isVisible={newMerchant} onClose={() => setNewMerchant(false)} newUsers={newRequest}></NewMerchantRequest>
        </div>
    );
};

export default ManageUsers;