import './Services.css';
import React from 'react';
import Lottie from "lottie-react";
import services from "../../assets/all-animation/Transport 2.json";

const Services = () => {
    return (
        <div>
            <div className='services-bg'>
                <div className='md:flex justify-center items-center gap-10'>
                    <div className='flex flex-col gap-6 text-white'>
                        <h2 className='text-6xl'>A Trusted Provider of</h2>
                        <h1 className='text-5xl font-pppins font-bold'>Courier services</h1>
                        <p className='text-xl'>We deliver your products safely to <br /> your home in a reasonable time.</p>
                    </div>
                    <Lottie className="w-1/2 -mt-60" animationData={services} loop={true} />
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto px-10 xl:px-0'>
                <h1 className='text-4xl text-center font-pppins mt-20'>Delivery Charges</h1>
                <div>
                    <div className='grid grid-cols-4 gap-5 mt-16'>
                        <div>
                            <h1 className='p-3 flex justify-center items-center font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center'>Package Weight</h1>
                            <div className='bg-[#A7E0F4] rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5'>
                                <h1 className='text-xl font-semibold mb-2'>Standard up to 1kg</h1>
                                <h1 className='text-xl font-semibold mb-2'>Per Additional kg</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className='p-3 flex justify-center items-center font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center'>Inside Dhaka</h1>
                            <div className='bg-[#A7E0F4] rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5 text-center'>
                                <h1 className='text-xl font-semibold mb-2'>70 Tk</h1>
                                <h1 className='text-xl font-semibold mb-2'>20 Tk</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className='p-3 flex justify-center items-center font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center'>Dhaka Sub-Area</h1>
                            <div className='bg-[#A7E0F4] rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5 text-center'>
                                <h1 className='text-xl font-semibold mb-2'>110 Tk</h1>
                                <h1 className='text-xl font-semibold mb-2'>25 Tk</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className='p-3 flex justify-center items-center font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center'>Outside Dhaka</h1>
                            <div className='bg-[#A7E0F4] rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5 text-center'>
                                <h1 className='text-xl font-semibold mb-2'>170 Tk</h1>
                                <h1 className='text-xl font-semibold mb-2'>30 Tk</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 items-cente mt-10 gap-5'>
                            <div className='bg-[#E8F6FC] p-5 rounded-tl-3xl rounded-br-3xl flex justify-center items-center'>
                                <h1 className='text-2xl font-pppins'>Cash On Delivery</h1>
                            </div>
                            <div className='divide-y-2 p-5 bg-[#E8F6FC] rounded-tl-3xl rounded-br-3xl'>
                                <h1 className='text-xl'>0% COD charge for the Same District delivery</h1>
                                <h1 className='text-xl mt-3'>1% COD charge for Outside Dhaka</h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 items-cente mt-10 gap-5'>
                            <div className='bg-[#E8F6FC] p-5 rounded-tl-3xl rounded-br-3xl divide-y-2'>
                                <h1 className='text-2xl font-pppins'>Exchange & Partial Delivery Service</h1>
                                <h1 className='mt-3'>For Exchange and Partial delivery, an additional 50% of the delivery charge will apply to cover the inbound cost, in addition to one forward delivery charge.</h1>
                            </div>
                            <div className='divide-y-2 p-5 bg-[#E8F6FC] rounded-tl-3xl rounded-br-3xl'>
                                <h1 className='text'>* All charges are including VAT and Tax</h1>
                                <h1 className='text mt-3'>* No additional charge on Return. Only one attempted delivery charge is applicable</h1>
                                <h1 className='text mt-3'>* We serve upto 5 kg parcel.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Services;

