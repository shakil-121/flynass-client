import React from 'react';
import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"
import img4 from "../../assets/images/4.png"
import img5 from "../../assets/images/5.png"

const Instruction = () => {
    return (
        <div className='font-pppins'>
           <div className='border-b-8'>
           <h1 className='text-2xl my-4'>Instruction For Multiple Parcel Order</h1>
           </div>
            <h1 className='text-xl my-4'>Step: 01</h1>
            <h1 className='text-base my-4'>Download Sample CSV File And Open It. <span className="text-red-600">Don't Change CSV File Heading/Title .</span> </h1>
            <img className='w-[70vw]' src={img5} alt="" />
            <h1 className='text-xl my-4'>Step: 02</h1>
            <h1 className='text-base my-4'>Change The Demo Order Content And Put Your Parcel Order Information .</h1>
            <img className='w-[70vw]' src={img1} alt="" />
            <h1 className='text-xl my-4'>Step: 03</h1>
            <h1 className='text-base my-4'>Click Save As Type Option.</h1>
            <img className='w-[70vw]' src={img2} alt="" />
            <h1 className='text-xl my-4'>Step: 04</h1>
            <h1 className='text-base my-4'>Select CSV.</h1>
            <img className='w-[70vw]' src={img3} alt="" />
            <h1 className='text-xl my-4'>Step: 05</h1>
            <h1 className='text-base my-4'>Save It As CSV File.</h1>
            <img className='w-[70vw]' src={img4} alt="" />
        </div>
    );
};

export default Instruction;