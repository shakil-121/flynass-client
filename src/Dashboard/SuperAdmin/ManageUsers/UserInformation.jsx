import React from 'react';

const UserInformation = ({ isVisible, onClose, allUsers }) => {
    if (!isVisible) return null;


    const singleUser = allUsers.find(user => user._id === isVisible);
    // console.log(singleUser);

    return (
        <div className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full md:w-[600px] flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-red-500 text-red-500 place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-sky-200 p-5 rounded-md'>
                    <h1 className='text-center font-pppins text-3xl mb-8'>User Information</h1>
                    <div className='flex items-center gap-5'>
                        <img className='w-48 h-48' src={singleUser.image} alt="" />
                        <div className='flex flex-col gap-y-3'>
                            <h1 className='text-xl font-semibold'><span className='text-2xl font-pppins'>Merchant ID:</span> {singleUser._id}</h1>
                            <h1 className='text-xl'><span className='text-2xl font-pppins'>Name:</span> {singleUser.name}</h1>
                            <h1 className='text-xl font-semibold'><span className='text-2xl font-pppins'>Email:</span> {singleUser.email}</h1>
                            <h1 className='text-xl font-semibold'><span className='text-2xl font-pppins'>Phone:</span> {singleUser.phone}</h1>
                            <h1 className='text-xl font-semibold'><span className='text-2xl font-pppins'>NID Card:</span> {singleUser.NID}</h1>
                            <h1 className='text-xl font-semibold'><span className='text-2xl font-pppins'>Address:</span> {singleUser.address}</h1>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserInformation;