import React from 'react';
import cover from "../../assets/images/abut.png"
import useTitle from '../../Hooks/useTitle';
import CEOImg from '../../assets/images/hasib.png'
import MDImg from '../../assets/images/imraz.jpg'

const About = () => {
    useTitle("About")
    return (
        <div>
            <div className="pt-16 md:pt-0">
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

                <p className='md:text-3xl text-xl font-bold uppercase text-center font-pppins mt-20'>our honorable "ceo" and "md" speech</p>

                <div className='font-pppins my-10 shadow-[0px_20px_20px_10px_#00000024] p-8 rounded-lg'>
                   <div>
                   <img className='h-48 w-auto rounded-xl' src={CEOImg} alt="" /> 
                   <p className='text-xl'>MD.Hasibul Islam</p>
                   <p>CEO,Flynass</p>
                   </div> 
                   <br /> 

                    <p className='text-justify'>
                    As the CEO and Managing Director of Flynass Courier Service, I am honored to address this gathering of esteemed individuals. Flynass has always been committed to delivering excellence, and it's a privilege to share our vision with you.

In a world that thrives on connectivity and speed, reliable courier services have become the backbone of many industries. At Flynass, we understand the importance of timely deliveries, secure shipments, and seamless logistics. Our dedicated team has worked tirelessly to build a network that caters to these needs efficiently.

Our journey has been marked by challenges that we've turned into opportunities. We've embraced technology to enhance our operations, ensuring that every package reaches its destination with precision. But it's not just about technology; it's about the people who make it possible. I am immensely proud of our team's dedication and the values they bring to our company.

As we move forward, our commitment to sustainability remains steadfast. We are actively implementing eco-friendly practices because we believe that responsible business is the only way forward. It's not just a responsibility, but a promise to the planet and the generations to come.

I want to express my gratitude to our partners and clients. Your trust in us has been our driving force. We pledge to continue delivering exceptional service and strengthening these partnerships.

In closing, Flynass Courier Service is not just a business venture; it's a reflection of our shared aspirations. Our journey is a testament to what collaboration, innovation, and determination can achieve. I am excited about the road ahead and look forward to the continued growth of Flynass and the opportunities it will bring.

Thank you.
                    </p>
                </div>
                <div className='font-pppins my-24 shadow-[0px_20px_20px_10px_#00000024] p-8 rounded-lg'>
                   <div className='text-right'>
                  <div className='flex justify-end'>
                  <img className='h-48 rounded-xl w-auto' src={MDImg} alt="" /> 
                  </div>
                   <p className='text-xl'>MD.Imraz</p>
                   <p>Managing Director,Flynass</p>
                   </div> 
                   <br /> 

                    <p className='text-justify'>
                    As the Managing Director of Flynass, I am delighted to introduce our dynamic courier service company's website. Our digital platform is more than just a virtual space – it's your gateway to swift, reliable, and hassle-free deliveries. With user-friendly navigation and streamlined features, our website empowers you to schedule shipments, track packages, and experience the convenience of our top-notch services from the comfort of your device. Join us in embracing efficiency and convenience as we invite you to explore our website and unlock a world of seamless courier solutions. Your packages, our priority – Flynass delivers with excellence.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About;