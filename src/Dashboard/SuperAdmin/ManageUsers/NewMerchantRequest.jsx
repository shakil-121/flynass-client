import React from 'react';
import { FaIdCard, FaInfo, FaTrashAlt, FaUserPlus } from 'react-icons/fa';

const NewMerchantRequest = ({ isVisible, onClose, allUsers }) => {
    if (!isVisible) return null;

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
                                allUsers.map((user, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-6 mb-5 justify-items-center items-center shadow-lg text-xl font-josefin p-2' key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className='flex flex-col gap-1'>
                                            <div className="dropdown dropdown-bottom text-black">
                                                <label tabIndex={0} className="font-pppins">pending</label>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                                    <li className='text-xl rounded-md text-secondary'>confirm</li>
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
        </div>
    );
};

export default NewMerchantRequest;