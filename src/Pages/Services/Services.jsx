import './Services.css';
import React from 'react';
import Lottie from "lottie-react";
import services from "../../assets/all-animation/Services.json";
import heroServices from "../../assets/Services/hero.png"
// import servicesBg from "../../assets/Services/hero-header-bg.png"

const Services = () => {
    return (
        <div className='services-bg'>
            <div className='flex justify-center items-center gap-10 mt-20'>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-6xl'>A Trusted Provider of</h2>
                    <h1 className='text-5xl font-pppins font-bold'>Courier services</h1>
                    <p className='font-semibold font-pppins'>We deliver your products safely to <br /> your home in a reasonable time.</p>
                </div>
                <img src={heroServices} alt="" />
            </div>
        </div>
    );
};
export default Services;