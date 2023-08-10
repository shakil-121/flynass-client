import logo1 from '../../../assets/Respected/c1.jpg';
import logo2 from '../../../assets/Respected/c2.png';
import logo3 from '../../../assets/Respected/c3.jpg';
import logo4 from '../../../assets/Respected/c4.png';
import logo5 from '../../../assets/Respected/c5.jpg';
import banner from "../../../assets/images/banner.png"
import SectionTitle from '../../../Component/SectionTitle';
import React from "react";
import Marquee from "react-fast-marquee";

const Respect = () => {
    return (
        <div className=''>
            <div>
                <img className='w-[100vw] mt-8 ' src={banner} alt="" />
            </div>
            <div className='mt-36 2xl:px-0 md:px-16'>
            <div className='text-center'>
                <SectionTitle subHeading="Respected" heading="Clinets & Partners"></SectionTitle>
            </div>
            <Marquee>
                <img className='p-10 w-48' src={logo1} alt="" />
                <img className='p-10 w-48' src={logo2} alt="" />
                <img className='p-10 w-48' src={logo3} alt="" />
                <img className='p-10 w-48' src={logo4} alt="" />
                <img className='p-10 w-48' src={logo5} alt="" />
                <img className='p-10 w-48' src={logo1} alt="" />
                <img className='p-10 w-48' src={logo3} alt="" />
            </Marquee>
        </div>
        </div>
    );
};

export default Respect;