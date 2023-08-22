import React from 'react';
import { FaIdCard } from 'react-icons/fa';

const UserInformation = ({ isVisible, onClose, allUsers }) => {
    if (!isVisible) return null;
    // console.log(isVisible);

    const singleUser = allUsers.find(user => user._id === isVisible);

    return (
        <div className='z-20 fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[90vw] md:w-[60vw] flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-2 border-black text-black place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='h-[90vh] overflow-auto bg-[#1E62D4] p-5 rounded-md'>
                    <h1 className='text-center font-pppins text-3xl mb-8 text-white flex items-center justify-center gap-3'>Information Card<FaIdCard /> </h1>
                    <div className='flex flex-col gap-y-3 text-white text-center'>
                        <img className='w-48 rounded-md mx-auto' src={singleUser?.image} alt="" />
                        <h1 className='text-xl font-semibold'><span className='text-2xl font-pppins'>Merchant ID:</span> {singleUser?._id}</h1>
                        <div className='grid grid-cols-2 gap-2'>
                            <h1 className='text-xl'><span className='text-xl font-pppins'>Name:</span> {singleUser?.name}</h1>
                            <h1 className='text-xl font-semibold'><span className='text-xl font-pppins'>Email:</span> {singleUser?.email}</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <h1 className='text-xl font-semibold'><span className='text-xl font-pppins'>Phone:</span> {singleUser?.phone}</h1>
                            <h1 className='text-xl font-semibold'><span className='text-xl font-pppins'>NID Card:</span> {singleUser?.NID}</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <h1 className='text-xl font-semibold'><span className='text-xl font-pppins'>Pyament Method:</span> {singleUser?.payment_method}</h1>
                            <h1 className='text-xl font-semibold'><span className='text-xl font-pppins'>Mobile/Bank Account:</span> {singleUser?.account_number}</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <h1 className='text-xl font-semibold'><span className='text-xl font-pppins'>Bank Name:</span> {singleUser?.bank_name}</h1>
                            <h1 className='text-xl font-semibold'><span className='text-xl font-pppins'>Branch Name:</span> {singleUser?.branch_name}</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <h1 className='text-xl font-semibold'><span className='text-xl font-pppins'>Routing Number:</span> {singleUser?.routing_number}</h1>
                            <h1 className='text-sm font-semibold'><span className='text-xl font-pppins'>Address:</span> {singleUser?.address}</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserInformation;
