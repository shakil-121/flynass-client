import React from 'react';
import useUserInfo from '../../Hooks/useUserInfo';
import { FaArrowLeft, FaHome, FaIdCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Address = () => {
    const userInfo = useUserInfo();
    console.log(userInfo);
    return (
        <div className='md:w-1/2 mt-28'>
            <h1 className='text-2xl font-pppins hover:bg-slate-100  py-5 px-5 border-b-2 flex items-center gap-3'><FaHome />{userInfo?.address}</h1>
            <h1 className='text-2xl font-pppins hover:bg-slate-100  py-5 px-5 border-b-2 flex items-center gap-3'><FaIdCard />Nationality: Bangladeshi</h1>
            <div className='mt-5'>
                <Link to="../menu">
                    <h1 className='btn bg-blue-800 text-white hover:bg-blue-700'>
                        <FaArrowLeft />Back
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default Address;