import React from 'react';
import { FaInfo, FaTrashAlt } from 'react-icons/fa';
import CreateAdmin from './CreateAdmin';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import UserInformation from '../ManageUsers/UserInformation';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AllAdmin = () => {
    const [showModal, setShowModal] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const TotalAdmin = allUsers.filter(admin => admin.role === 'admin');
    console.log(TotalAdmin);

    const handleAdminDelete = id => {
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
        <div className='px-10 mt-20'>
            <div className='md:flex justify-between'>
                <h1 className='text-3xl font-pppins'>All Admin{TotalAdmin.leng}</h1>

                <Link to='../admin_signup'><button className="btn btn-primary">Create Admin</button></Link>
            </div>
            <div>
                <table className="table table-xs table-pin-rows table-pin-cols border-2">
                    <tr className='text-center text-black grid md:grid-cols-5'>
                        <th className='bg-sky-400 py-3'>No.</th>
                        <th className='bg-sky-400 py-3'>Name</th>
                        <th className='bg-sky-400 py-3'>User Id</th>
                        <th className='bg-sky-400 py-3'>Info</th>
                        <th className='bg-sky-400 py-3'>Delete</th>
                    </tr>
                </table>
                {
                    TotalAdmin.map((user, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-5 mb-3 justify-items-center items-center shadow-lg text-sm font-josefin p-2' key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td className='m-4' style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {user._id}
                        </td>
                        <td>
                            <button onClick={() => setShowInfo(user._id)} className='flex items-center gap-2 btn bg-[#1E62D4] text-white hover:bg-[#1E62D4]'><FaInfo />Info</button>
                        </td>
                        <td>
                            <button onClick={() => handleAdminDelete(user._id)} className='btn rounded-full bg-[#D53343] text-white hover:bg-[#D53343]'><FaTrashAlt /></button>
                        </td>
                    </tr>)
                }
            </div>
            <CreateAdmin isVisible={showModal} onClose={() => setShowModal(false)} ></CreateAdmin>
            <UserInformation isVisible={showInfo} onClose={() => setShowInfo(false)} allUsers={allUsers}></UserInformation>
        </div>
    );
};

export default AllAdmin;