import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from "../../assets/logo/logo.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CreateParcel from '../../Dashboard/MyParcel/CreateParcel';
import { MdCreateNewFolder } from 'react-icons/md';

const DashboardNavBar = () => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(AuthContext);
    return (
        <div className="flex justify-center md:justify-between items-center sticky top-0 z-10 bg-white shadow-md">
            <div className="">
                <img className="h-10 sm:h-14 md:h-16" src={logo} alt="" />
            </div >
            <div className='flex items-center gap-5'>
                <div className='rounded-md'>
                    <button onClick={() => setShowModal(true)} className="btn bg-[#1E62D4] hover:bg-[#1E62D4] flex items-center text-xs font-pppins text-white gap-2"><MdCreateNewFolder />Create Single Parcel </button>
                </div>
                <div className='bg-[#1E62D4] px-4 py-2 rounded-md'>
                    {/* <button  onClick={() => setShowModal(true)} className="text-base  flex items-center font-pppins text-white gap-2"><MdCreateNewFolder /> Create Multi Parcel </button> */}
                <Link to="multi_parcel" className="text-base  flex items-center font-pppins text-white gap-2"> <MdCreateNewFolder /> Create Multi Parcel</Link>
                <div className='rounded-md hidden md:block'>
                    <button onClick={() => setShowModal(true)} className="btn bg-[#1E62D4] hover:bg-[#1E62D4] items-center font-pppins text-white gap-2"><MdCreateNewFolder /> Create Multi Parcel </button>
                </div>
            </div>
            <CreateParcel isVisible={showModal} onClose={() => setShowModal(false)} user={user}></CreateParcel>
        </div >
    );
};

export default DashboardNavBar;
