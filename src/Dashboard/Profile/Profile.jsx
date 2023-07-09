import { LiaEdit } from "react-icons/lia";
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { AiOutlineNumber } from "react-icons/ai";
import { FaIdCard, FaPhone, FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ProfileUpdate from "./ProfileUpdate";

const Profile = () => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(AuthContext);

    return (
        <div className='bg-[#2c2c54] p-10 rounded-md text-white'>
            <div className="flex justify-between">
                <h1 className='text-4xl font-bold font-pppins'>My Profile</h1>
            </div>
            <div className="mt-14">
                <img className="w-28 h-28 rounded-xl" src={user?.photoURL} alt="" />
                <div className="flex justify-between mt-8 shadow-slate-600 shadow-2xl p-5 rounded-md">
                    <div className="flex-1 grid grid-cols-2 mt-5 gap-4">
                        <h4 className="font-bold mt-2">
                            Merchant ID:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><AiOutlineNumber /> FN-12102</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Full Name:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><FaUserAlt /> {user?.displayName}</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Email Address:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><IoMdMail />codersrabbi@gmail.com</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Phone:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><FaPhone />+8801303329413</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            NID Number:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><FaIdCard />7307890245</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Address:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><FaIdCard />N/A</span>
                        </h4>
                    </div>
                    <div>
                        <button onClick={() => setShowModal(true)} className="text-xl font-serif flex items-center"><LiaEdit /> Edit</button>
                    </div>
                </div>
            </div>
            <ProfileUpdate isVisible={showModal} onClose={() => setShowModal(false)} user={user}></ProfileUpdate>
        </div>
    );
};

export default Profile;