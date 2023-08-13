import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from "../../assets/logo/logo.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CreateParcel from '../../Dashboard/MyParcel/CreateParcel';
import { MdCreateNewFolder } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import useUserInfo from '../../Hooks/useUserInfo';

const DashboardNavBar = () => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(AuthContext);

    // const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
    //     const res = await fetch('http://localhost:5000/users')
    //     return res.json();
    // })

    // const loggedInUser = user?.email;
    // const currentUser = allUsers.find(item => item.email === loggedInUser)

    const userInfo = useUserInfo()
    const role = userInfo?.role;

    const account_number = userInfo?.account_number;

    return (
        <div className="flex justify-center md:justify-between items-center top-0 z-10 md:h-16 h-20 bg-white shadow-md">
            <div className="">
                <img className="h-10 sm:h-14 md:h-16 w-auto" src={logo} alt="" />
            </div >
            {
                role === 'admin' ?
                    <></>
                    :
                    <>
                        {
                            role === 'superAdmin' ?
                                <></>
                                :
                                <>
                                    {
                                        account_number === "N/A" ?
                                            <>
                                                <span className='text-center me-3 bg-red-500 px-2 text-white rounded-md'>Profile Incomolete. <br /> Please Complete your profile</span>
                                            </>
                                            :
                                            <div className='flex items-center gap-5'>
                                                <div className='rounded-md '>
                                                    <button onClick={() => setShowModal(true)} className="btn px-2 py-1 bg-[#1E62D4] hover:bg-[#1E62D4] flex items-center md:text-xs text-[8px] font-pppins text-white gap-2"><MdCreateNewFolder />Create Single Parcel </button>
                                                </div>
                                                <div >
                                                    {/* <button  onClick={() => setShowModal(true)} className="text-base  flex items-center font-pppins text-white gap-2"><MdCreateNewFolder /> Create Multi Parcel </button> */}
                                                    <Link to="multi_parcel"> <button className='bg-[#1E62D4] btn px-2 py-1 rounded-md hover:bg-[#1E62D4] text-white md:text-xs text-[8px] font-pppins'><MdCreateNewFolder /> Create Multi Parcel</button></Link>
                                                </div>
                                            </div>
                                    }
                                </>
                        }
                    </>

            }
            <CreateParcel isVisible={showModal} onClose={() => setShowModal(false)} user={user}></CreateParcel>
        </div >
    );
};

export default DashboardNavBar;
