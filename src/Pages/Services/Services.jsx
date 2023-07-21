import './Services.css';
import React from 'react';
// import Lottie from "lottie-react";
// import services from "../../assets/all-animation/Transport 2.json";

const Services = () => {
    return (
        <div className='mb-16'>
            <div className='services-bg'>
                
            </div>
            <div className='max-w-screen-xl mx-auto 2xl:px-0 md:px-16'>
                <h1 className='text-4xl text-center font-pppins mt-20'>Delivery Charges</h1>
                <div>
                    <div className='grid grid-cols-4 gap-1 nd:gap-5 mt-16 px-2 md:px-0'>
                        <div>
                            <h1 className='p-1 md:p-3 flex justify-center items-center md:font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center'>Package Weight</h1>
                            <div className='bg-[#020531] text-white font-pppins rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5'>
                                <h1 className='md:text-xl font-semibold mb-2'>Standard up to 1kg</h1>
                                <h1 className='md:text-xl font-semibold mb-2'>Per Additional kg</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className='p-1 md:p-3 flex justify-center items-center md:font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center'>Inside Dhaka</h1>
                            <div className='bg-[#020531] text-white font-pppins rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5 text-center'>
                                <h1 className='md:text-xl font-semibold mb-2'>70 Tk</h1>
                                <h1 className='md:text-xl font-semibold mb-2'>20 Tk</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className='p-1 md:p-3 flex justify-center items-center md:font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center'>Dhaka Sub-Area</h1>
                            <div className='bg-[#020531] text-white font-pppins rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5 text-center'>
                                <h1 className='ms:text-xl font-semibold mb-2'>110 Tk</h1>
                                <h1 className='ms:text-xl font-semibold mb-2'>25 Tk</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className='p-1 md:p-3 flex justify-center items-center md:font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center'>Outside Dhaka</h1>
                            <div className='bg-[#020531] text-white font-pppins rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5 text-center'>
                                <h1 className='md:text-xl font-semibold mb-2'>130 Tk</h1>
                                <h1 className='md:text-xl font-semibold mb-2'>30 Tk</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid md:grid-cols-2 items-cente mt-10 gap-5 px-2 md:px-0'>
                            <div className='bg-[#E8F6FC] p-5 rounded-tl-3xl rounded-br-3xl flex justify-center items-center'>
                                <h1 className='text-2xl font-pppins'>Cash On Delivery</h1>
                            </div>
                            <div className='divide-y-2 p-5 bg-[#E8F6FC] rounded-tl-3xl rounded-br-3xl'>
                                <h1 className='text-xl'>0% COD charge for the Same District delivery</h1>
                                <h1 className='text-xl mt-3'>1% COD charge for Outside Dhaka</h1>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 items-cente mt-10 gap-5 px-2 md:px-0'>
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

