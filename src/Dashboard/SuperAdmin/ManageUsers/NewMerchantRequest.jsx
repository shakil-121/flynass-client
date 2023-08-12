import React from 'react';
import { FaIdCard, FaInfo, FaTrashAlt, FaUserPlus } from 'react-icons/fa';
import UserInformation from './UserInformation';
import { useState } from 'react';
import Swal from 'sweetalert2';

const NewMerchantRequest = ({ isVisible, onClose, newUsers }) => {
    const [showModal, setShowModal] = useState(false);
    if (!isVisible) return null;


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

    const handleroleupdate = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This Valid user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,sure!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/role_update/${id}`, {
                    method: "PUT"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        // refetch();
                        if (data.modifiedCount > 0) {
                            Swal.fire("Merchant!", "User has been merchant.", "success");
                        }
                        console.log(data);
                    });
            }
        });
    }

    return (
        <div className='z-30 fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='flex flex-col rounded-lg w-[80vw]'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-black text-black-500 place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-[#1E62D4] p-5 rounded-md'>
                    <h1 className='text-center font-pppins text-3xl mb-8 text-white flex items-center justify-center gap-3'>New Merchant Request<FaUserPlus /> </h1>
                    <div className='flex items-center justify-around gap-5'>
                        <div>
                            <table className="table lg:w-full overflow-x-auto">
                                <tr className='text-center bg-[#1E62D4] text-white grid md:grid-cols-6'>
                                    <th>No.</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>User Info</th>
                                    <th>Delete</th>
                                </tr>
                            </table>
                            {
                                newUsers.map((user, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-6 mb-5 justify-items-center items-center shadow-lg text-xl font-josefin p-2' key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className='flex flex-col gap-1'>
                                            <div className="dropdown dropdown-bottom text-black">
                                                <label tabIndex={0} className="font-pppins">{user.role}</label>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                                    <li onClick={() => handleroleupdate(user?._id)} className='text-xl rounded-md text-secondary'>merchant</li>
                                                </ul>
                                            </div>
                                        </div>
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
                    </div>
                </div>

            </div>
            <UserInformation isVisible={showModal} onClose={() => setShowModal(false)} allUsers={newUsers}></UserInformation>
        </div>
    );
};

export default NewMerchantRequest;