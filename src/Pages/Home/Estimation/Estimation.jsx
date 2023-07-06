import React from '../../../assets/Estimation/bg1.jpg';
import SectionTitle from '../../../Component/SectionTitle';
import './Estimation.css'
import { HiArrowRight } from "react-icons/hi";

const Estimation = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
                <div>
                    <SectionTitle subHeading="Estimation" heading="Has a wide range of solutions"></SectionTitle>
                    <p className='mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry the <br /> standard dummy text ever since the when an printer took.</p>
                </div>
                <button className='bg-[#FF8A00] px-6 py-3 text-white font-bold'>Read More---</button>
            </div>
            <div className='bg'>
                <div className='max-w-screen-xl h-full mx-auto grid md:grid-cols-3 gap-10'>
                    <div className='text-white hover:border-8 hover:bg-slate-600 hover:bg-opacity-40 p-2 flex flex-col justify-end hover:justify-center'>
                        <h1 className='text-8xl font-bold font-roboto mb-7'>01</h1>
                        <h2 className='text-2xl font-semibold font-pppins mb-5'>Solutions and specialized expretise</h2>
                        <p className='font-semibold mb-5'>Our aim is to optimize and improve your supply chain so that we can give you the best service</p>
                        <div>
                            <button className='border px-8 py-3 text-2xl'><HiArrowRight /></button>
                        </div>
                    </div>
                    <div className='text-white hover:border-8 hover:bg-slate-600 hover:bg-opacity-40 p-2 flex flex-col justify-end hover:justify-center'>
                        <h1 className='text-8xl font-bold font-roboto mb-7'>02</h1>
                        <h2 className='text-2xl font-semibold font-pppins mb-5'>Multiple warehouese</h2>
                        <p className='font-semibold mb-5'>Lorem ipsum dolor sit </p>
                        <p className='font-semibold mb-5'>Lorem ipsum dolor sit </p>
                        <div>
                            <button className='border px-8 py-3 text-2xl'><HiArrowRight /></button>
                        </div>
                    </div>
                    <div className='text-white hover:border-8 hover:bg-slate-600 hover:bg-opacity-40 p-2 flex flex-col justify-end hover:justify-center'>
                        <h1 className='text-8xl font-bold font-roboto mb-7'>03</h1>
                        <h2 className='text-2xl font-semibold font-pppins mb-5'>Tracking made easy</h2>
                        <p className='font-semibold mb-5'>A tracking number for the entire process. so that you can find the exact position. it will help you</p>
                        <div>
                            <button className='border px-8 py-3 text-2xl'><HiArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estimation;