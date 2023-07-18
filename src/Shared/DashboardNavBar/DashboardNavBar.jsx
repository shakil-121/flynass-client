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
        <div className="navbar bg-white sticky top-0 z-10 px-6 shadow-md">
            <div className="navbar-start">
                <img className="h-16" src={logo} alt="" />
            </div >
            <div className='navbar-end gap-10'>
                <div className='bg-[#1E62D4] px-4 py-2 rounded-md'>
                    <button onClick={() => setShowModal(true)} className="text-base  flex items-center font-pppins text-white gap-2"><MdCreateNewFolder />Create Single Parcel </button>
                </div>
                <div className='bg-[#1E62D4] px-4 py-2 rounded-md'>
                    <button onClick={() => setShowModal(true)} className="text-base  flex items-center font-pppins text-white gap-2"><MdCreateNewFolder /> Create Multi Parcel </button>
                </div>
            </div>
            <CreateParcel isVisible={showModal} onClose={() => setShowModal(false)} user={user}></CreateParcel>
        </div >
    );
};

export default DashboardNavBar;
