import logo1 from '../../../assets/Respected/w1.png';
import logo2 from '../../../assets/Respected/w2.png';
import logo3 from '../../../assets/Respected/w3.png';
import logo4 from '../../../assets/Respected/w4.png';
import logo5 from '../../../assets/Respected/w5.png';
import logo6 from '../../../assets/Respected/w6.png';
import SectionTitle from '../../../Component/SectionTitle';
import React from "react";
import Marquee from "react-fast-marquee";

const Respect = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-36'>
            <div className='text-center'>
                <SectionTitle subHeading="Respected" heading="Clinets & Partners"></SectionTitle>
            </div>
            <Marquee>
                <img className='p-10 w-48' src={logo1} alt="" />
                <img className='p-10 w-48' src={logo2} alt="" />
                <img className='p-10 w-48' src={logo3} alt="" />
                <img className='p-10 w-48' src={logo4} alt="" />
                <img className='p-10 w-48' src={logo5} alt="" />
                <img className='p-10 w-48' src={logo6} alt="" />
                <img className='p-10 w-48' src={logo3} alt="" />
            </Marquee>
        </div>
    );
};

export default Respect;