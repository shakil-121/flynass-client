import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import { MdLocationPin, MdOutlineExitToApp, MdLibraryBooks } from "react-icons/md";

const Menu = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user);
    return (
        <div className='p-5'>
            <h1 className='ps-5 text-xl'>
                Hi, <br />
                {user.displayName}
            </h1>
            <div className='flex flex-col mt-14 divide-y w-1/2'>
                <Link t0="/">
                    <h1 className='hover:bg-[#F5F5F5] flex items-center gap-14 text-3xl font-semibold py-8 ps-5'>
                        <FaUserPlus />Profile
                    </h1>
                </Link>
                <Link t0="/">
                    <h1 className='hover:bg-[#F5F5F5] flex items-center gap-14 text-3xl font-semibold py-8 ps-5'>
                        <MdLocationPin />Address
                    </h1>
                </Link>
                <Link t0="/">
                    <h1 className='hover:bg-[#F5F5F5] flex items-center gap-14 text-3xl font-semibold py-8 ps-5'>
                        <MdLibraryBooks />Terms & Conditions
                    </h1>
                </Link>
                <Link t0="/">
                    <h1 className='hover:bg-[#F5F5F5] flex items-center gap-14 text-3xl font-semibold py-8 ps-5'>
                        <MdOutlineExitToApp />Logout
                    </h1>
                </Link>


            </div>
        </div>
    );
};

export default Menu;