import React from 'react';
import cover from "../../assets/images/abut.png"
import useTitle from '../../Hooks/useTitle';

const About = () => {
    useTitle("About")
    return (
        <div>
            <div>
                <img className='w-full' src={cover} alt="" />
            </div>
            <div className='m-10'>
                <h1 className='text-center text-black font-pppins text-5xl'>About Us</h1>
              <p className="text-justify font-pppins text-base mt-8">
              <span className='text-sky-500 text-2xl'>Flynass</span> Courier is an organization manned by individuals with a good experience in the various branches of the logistics and E-commerce industries respectively, who believe in an environmentally sustainable approach towards work. After a tedious year spent in research and development. We have constructed an efficient and environmentally sustainable E-commerce logistics process which has culminated to the launching of this green express logistics service which is fully equipped to cater to E-commerce businesses as well as the massive Bangladeshi market! <br /> 
              <br />
The courier industry is decades old and has remained relatively unchanged, with minimal use of technology and below average service levels. Flynass Courier aims to become the first national brand of green courier for fastest and secured delivery. We offer businesses a superior experience built on convenience, reliability and unparalleled customer service. All powered by our exclusive technology platform. We provide easy web and mobile ordering, flexible delivery options, transparent pricing, real-time tracking and confirmations and a feature-rich API for a unified last mile delivery solution.  
Its fleet of bike messengers bring parcels to clients in Dhaka and beyond. It is fueled by the growing demand of e-commerce business in Bangladesh. Flynass Courier has a high tech dashboard base which helps the clients to keep track of their products. As most of the delivery networks in Bangladesh are far behind in terms of technology, our state-of-the art technology and fleet of highly trained messengers can guarantee the most proficient request fulfilment.

              </p>
            </div> 
            
        </div>
    );
};

export default About;