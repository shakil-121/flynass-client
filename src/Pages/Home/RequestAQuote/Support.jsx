import React from 'react'; 
import { FaPhoneVolume } from "react-icons/fa"; 
import Lottie from "lottie-react";
import phone from "../../../../public/animation_lkhq0cgw.json";

const Support = () => {
    return (
        <div className='p-4 md:p-2 bg-white w-full md:w-1/3 mx-auto border-2 md:border-0 flex flex-col gap-2 shadow-2xl shadow-[#1E8FD0]'>
                <div className='ps-16'>
                <h4 className='uppercase font-semibold'>24/7 Active Suport Team</h4>
                <h1 className='text-3xl text-[#1E8FD0] font-bold'>Need Immediate Support Or Any Help?</h1>
                </div>

               <div className='flex justify-center items-center'>
               <Lottie className='h-36 ms-0' animationData={phone} loop={true} />
                <a className='text-2xl font-bold' href="tel:09611305423"> 09611305423</a>
               </div>
            </div>
    );
};

export default Support;