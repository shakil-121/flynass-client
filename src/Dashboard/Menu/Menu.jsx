import customerCare from '../../assets/images/customer-care-icon.png';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import { MdLocationPin, MdOutlineExitToApp, MdLibraryBooks } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';

const Menu = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logout()
            .then(() => {
                // navigate({to:"/"})

                console.log("logout completed");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const loggedInUser = user?.email;
    const currentUser = allUsers.find(item => item.email === loggedInUser)
    const role = currentUser?.role;

    return (
        <div className='p-5'>
            {
                role === 'admin' || 'superAdmin' ?
                    <></>
                    :
                    <div className='flex justify-between pe-10'>
                        <h1 className='ps-5 text-xl'>
                            Hi, <br />
                            {user?.displayName}
                        </h1>
                        <div className='flex items-center gap-2'>
                            <img className='w-10' src={customerCare} alt="" />
                            <h2 className='text-xl font-pppins'>Hotline: 09611305423</h2>
                        </div>
                    </div>
            }

            <div className='flex flex-col mt-14 divide-y w-1/2'>
                <Link to="/dashboard/profile">
                    <h1 className='hover:bg-[#F5F5F5] flex items-center gap-14 text-3xl font-semibold py-8 ps-5'>
                        <FaUserPlus />Profile
                    </h1>
                </Link>
                <Link to="/dashboard/address">
                    <h1 className='hover:bg-[#F5F5F5] flex items-center gap-14 text-3xl font-semibold py-8 ps-5'>
                        <MdLocationPin />Address
                    </h1>
                </Link>
                <Link to="/dashboard/terms-coditions">
                    <h1 className='hover:bg-[#F5F5F5] flex items-center gap-14 text-3xl font-semibold py-8 ps-5'>
                        <MdLibraryBooks />Terms & Conditions
                    </h1>
                </Link>
                <button onClick={handleLogout} className='hover:bg-[#F5F5F5] flex items-center gap-14 text-3xl font-semibold py-8 ps-5'>
                    <MdOutlineExitToApp />Logout
                </button>


            </div>
        </div>
    );
};

export default Menu;