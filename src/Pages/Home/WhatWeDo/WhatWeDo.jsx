import img1 from '../../../assets/whatwedo/img.png';
import pic1 from '../../../assets/whatwedo/pic1.png';
import pic2 from '../../../assets/whatwedo/pic2.png';
import pic3 from '../../../assets/whatwedo/pic3.png';
import SectionTitle from '../../../Component/SectionTitle';

const WhatWeDo = () => {
    return (
        <div className='bg-[#F2FAFF]'>
            <div className='max-w-screen-xl mx-auto'>
                <SectionTitle
                    heading="Specialist Logistics Services"
                    subHeading="What We Do!">
                </SectionTitle>
                <p className='text-center font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text <br /> ever since the when an printer took.</p>
                <div className='grid md:grid-cols-2 items-center justify-items-center gap-14 mt-20'>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <div className='flex flex-col gap-y-2'>
                            <div className='flex items-center gap-10 bg-white pe-6 py-5'>
                                <div className='border-l-8 border-red-500 -ms-2 hover:ms-0 ps-6'>
                                    <img src={pic1} alt="" />
                                </div>
                                <div>
                                    <h1><span className='text-[#ff8a00] text-4xl font-bold'>01. </span><span className='text-3xl font-bold'>Road Freight</span></h1>
                                    <p className='leading-7 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-10 bg-white pe-6 py-5'>
                                <div className='border-l-8 border-red-500 -ms-2 hover:ms-0 ps-6'>
                                    <img src={pic2} alt="" />
                                </div>
                                <div>
                                    <h1><span className='text-[#ff8a00] text-4xl font-bold'>01. </span><span className='text-3xl font-bold'>Shipping Freight</span></h1>
                                    <p className='leading-7 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-10 bg-white pe-6 py-5'>
                                <div className='border-l-8 border-red-500 -ms-2 hover:ms-0 ps-6'>
                                    <img src={pic3} alt="" />
                                </div>
                                <div>
                                    <h1><span className='text-[#ff8a00] text-4xl font-bold'>01. </span><span className='text-3xl font-bold'>Air Freight</span></h1>
                                    <p className='leading-7 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;