import { LiaEdit } from "react-icons/lia";
import profile from "../../assets/images/default.png";
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { AiOutlineNumber } from "react-icons/ai";
import { FaIdCard, FaPhone, FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ProfileUpdate from "./ProfileUpdate";
import useUserInfo from "../../Hooks/useUserInfo";

const Profile = () => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(AuthContext);
    const userInfo = useUserInfo()
    // console.log(userInfo);

    return (
        <div className='p-10 rounded-md h-full'>
            <div className="flex justify-between">
                <h1 className='text-4xl font-bold font-pppins'>My Profile</h1>
            </div>
            <div className="mt-14">
                {
                    userInfo?.image ?
                        <>
                            <img className="w-28 h-28 rounded-xl" src={userInfo?.image} alt="" />
                        </>
                        :
                        <div className="flex justify-start">
                            <img className="w-20 h-20 rounded-full border-2 border-white" src={profile} alt="" />
                        </div>
                }
                <div className="md:flex justify-between mt-8 shadow-[rgba(0,_0,_0,_2)_0px_3px_10px] md:p-5 p-1 rounded-md">
                    <div className="flex-1 grid md:grid-cols-2 mt-5 gap-4">
                        <h4 className="font-bold mt-2">
                            Merchant ID:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><AiOutlineNumber /> FN-{userInfo?._id}</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Full Name:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><FaUserAlt /> {userInfo?.name}</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Email Address:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><IoMdMail />{userInfo?.email}</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Phone:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><FaPhone />{userInfo?.phone}</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            NID Number:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><FaIdCard />{userInfo?.NID}</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Address:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><FaIdCard />{userInfo?.address}</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Payment Method:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><FaIdCard />{userInfo?.payment_method}</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Mobile/Bank Account:
                            <br />
                            <span className="font-serif font-medium flex items-center gap-2"><FaIdCard />{userInfo?.account_number}</span>
                        </h4>
                    </div>

                    <div>
                        <button onClick={() => setShowModal(true)} className="text-xl md:mt-0 mt-2 font-serif flex items-center"><LiaEdit />Edit Profile</button>
                    </div>
                </div>
            </div>
            <ProfileUpdate isVisible={showModal} onClose={() => setShowModal(false)} user={user}></ProfileUpdate>
        </div>
    );
};

export default Profile;