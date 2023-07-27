import img1 from "../../../assets/whatwedo/img.png";
import pic1 from "../../../assets/whatwedo/pic1.png";
import pic2 from "../../../assets/whatwedo/pic2.png";
import pic3 from "../../../assets/whatwedo/pic3.png";
import SectionTitle from "../../../Component/SectionTitle";
import Lottie from "lottie-react";
import single from "../../../../public/01.json";
import multi from "../../../../public/04.json";
import van from "../../../../public/03.json"; 
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const WhatWeDo = () => {
  return (
    <div className="bg-[#F2FAFF] pt-20">
      <div className="max-w-screen-xl mx-auto 2xl:px-0 md:px-16 px-4">
        <div className="text-center">
          <SectionTitle
            heading="Specialist parcel delivery Services"
            subHeading="What We Do!"
          ></SectionTitle>
        </div>
        <p className="text-center font-semibold">
          Your Parcels, Our Priority - Exceptional Care Guaranteed . Efficiency
          and Reliability in Parcel Logistics . <br /> Dedicated to Delivering
          Your Parcels with Care
        </p>
        <div className="grid md:grid-cols-2 items-center justify-items-center gap-14 mt-20 font-pppins">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <div className="flex flex-col gap-y-2">
              <div className="md:flex  items-center gap-10 bg-white pe-6 py-5">
                <div className="border-l-8 border-[#1E8FD0] -ms-2 hover:ms-0 ps-6">
                  <Lottie className="h-36 w-24" animationData={single} loop={true} />
                </div>
                <div>
                  <h1>
                    <span className="text-[#ff8a00] text-4xl font-bold">
                      01.{" "}
                    </span>
                    <span className="text-2xl md:text-3xl font-bold">
                      Single Parcel Delivery
                    </span>
                  </h1>
                  <p className="leading-7 text-base mt-3">
                  Single Parcel Delivery is a streamlined and efficient service that caters to the needs of individuals and businesses looking to send or receive a single package.
                  </p>
                </div>
              </div>
              <div className="md:flex  items-center gap-10 bg-white pe-6 py-5">
                <div className="border-l-8 border-[#1E8FD0] -ms-2 hover:ms-0 ps-6">
                <Lottie className="h-48 w-24" animationData={multi} loop={true} />
                </div>
                <div>
                  <h1>
                    <span className="text-[#ff8a00] text-4xl font-bold">
                      02.{" "}
                    </span>
                    <span className="text-xl md:text-3xl font-bold">
                     Multi-Parcel Delivery
                    </span>
                  </h1>
                  <p className="leading-7 mt-3">
                  Multi-Parcel Delivery Service: A seamless solution for shipping multiple packages to customers, distributing gifts, or handling bulk documents efficiently and reliably. Ideal for individuals and businesses seeking simultaneous transportation of multiple parcels.
                  </p>
                </div>
              </div>
              <div className="md:flex  items-center gap-10 bg-white pe-6 py-5">
                <div className="border-l-8 border-[#1E8FD0] -ms-2 hover:ms-0 ps-6">
                <Lottie className="h-48 w-24" animationData={van} loop={true} />
                </div>
                <div>
                  <h1>
                    <span className="text-[#ff8a00] text-4xl font-bold">
                      03.{" "}
                    </span>
                    <span className="text-2xl md:text-3xl font-bold">
                   Custom Delivery Service 
                    </span>
                  </h1>
                  <p className="leading-7 mt-3">
                    
Custom Delivery Service offers a personalized and flexible shipping solution tailored to the specific needs of individuals and businesses. Whether you have unique delivery requirements, sensitive items, or specific time frames, this service is designed to accommodate your preferences.
                  </p>
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
