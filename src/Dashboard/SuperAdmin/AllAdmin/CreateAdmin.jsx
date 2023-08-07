import React from 'react';
import "../../MyParcel/CreateParcel.css";
import { useQuery } from '@tanstack/react-query';
import UsersInfo from './UsersInfo';
import { FaTrash, FaTrashAlt, FaUserTie } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CreateAdmin = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

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

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Done...',
                        text: 'This user is admin now'
                    })
                }
            });
    };


    return (
        <div className="z-20 fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center my-10">
            <div className="w-full md:w-[1200px] my-24 flex flex-col  rounded-lg height-vh mb-5">
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-black place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-sky-400 rounded-md p-10 overflow-x-auto'>
                    <h1 className='text-3xl font-pppins'>All Users</h1>
                    <table className="table w-full">
                        <thead>
                            <tr className="grid md:grid-cols-5 rounded-md justify-items-center mb-5 bg-slate-200">
                                <th className="bg-slate-200 font-josefin text-xl">SERIAL</th>
                                <th className="bg-slate-200 font-josefin text-xl">NAME</th>
                                <th className="bg-slate-200 font-josefin text-xl">EMAIL</th>
                                <th className="bg-slate-200 font-josefin text-xl">ADMIN</th>
                                <th className="bg-slate-200 font-josefin text-xl">Delete</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        allUsers.map((user, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-5 mb-5 justify-items-center items-center shadow-lg text-xl font-josefin p-2' key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {
                                    user?.role === 'admin' ? <p>Admin</p>
                                        :
                                        <>
                                            {
                                                user?.role === 'superAdmin' ? <p className='text-red-400 font-pppins'>SuperAdmin</p>
                                                    :
                                                    <button onClick={() => handleMakeAdmin(user)} className='btn btn-primary'>Make Admin</button>
                                            }
                                        </>
                                }
                            </td>
                            <td>
                                {
                                    user?.role === 'superAdmin' ? <p><FaUserTie /></p>
                                        :
                                        <button onClick={() => handleAdminDelete(user._id)} className='text-[#D53343]'><FaTrashAlt /></button>
                                }
                            </td>
                        </tr>)
                    }

                </div>
            </div>
        </div>
    );
};

export default CreateAdmin;