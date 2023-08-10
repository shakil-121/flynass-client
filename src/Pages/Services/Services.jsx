import useTitle from "../../Hooks/useTitle";
import "./Services.css";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();
// import Lottie from "lottie-react";
// import services from "../../assets/all-animation/Transport 2.json";

const Services = () => {
  useTitle("Services")
  return (
    <div className="service_animation mb-16">
      <div className="services-bg"></div>
      <div>
        <h1 className="text-center text-black font-pppins text-5xl mt-10">
          Our Services
        </h1>
        <p className="m-16 text-base text-justify font-pppins">
          We offer efficient delivery solutions to our clients. With your
          delivery needs efficiently managed by us. You will have more time to
          engage with your customers bringing in more business potential. Our
          24/7 customer support center is always ready to help you through any
          difficulty any time. We provide the following services <br />
          <br />
          <span className="font-bold text-xl">● Next Day Delivery:</span> Only
          available in Dhaka Metropolitan city within 24 hours.
          <br />
          <span className="font-bold text-xl">
            ● Dhaka Suburbs Delivery:
          </span>{" "}
          Narayanganj ,Tongi, Gazipur, Savar, Ashulia.
          <br />
          <span className="font-bold text-xl">● Outside Dhaka Delivery :</span> All over Bangladesh <br />
          <span className="font-bold text-xl"> ● Cash on Delivery:</span> We also make sure the outstanding price which will be paid
          by your customer & collected by our trustworthy delivery agents and
          delivered right to you. <br />
          <span className="font-bold text-xl">● Dedicated Key Account Manager:</span> Flynass
          Courier has a dedicated key accounts manager for individual merchants,
          who are there in order to solve any issues raised. <br />
          <span className="font-bold text-xl"> ● Superior
            Customer Service:</span> Flynass Courier provides an excellent and fast client
          service backed by our advanced technology. <br />
          <span className="font-bold text-xl"> ● Real Time
            Tracking:</span> Shows live status of your consignment through access in the
          Dashboard. <br /> <br />
          <i className="text-3xl text-sky-500 font-semibold">
            On Time Payment
          </i>{" "}
          <br />
          <i className="text-2xl text-sky-500 font-semibold">
            ● Bank Payment: <span className="text-black">Two days in a week. Usually Sunday and
              Wednesday.</span> </i> <br />
          <i className="text-2xl text-sky-500 font-semibold">● Mobile Banking by Bkash/ Nagad/ Rocket: <span className="text-black">Four days in a
            week. OUR KEY COMPETENCIES</span></i>

          <br /> <br />
          <span className="font-bold text-xl">● Service with A Passion:</span> 24/7 we go the extra mile to
          deliver the highest level of service. <br />
          <span className="font-bold text-xl">● Up-to-the-minute ETAs:</span>
          We remove the guesswork with clear arrival and delivery times. <br />{" "}
          <span className="font-bold text-xl">● Real-Time Tracking and Confirmation:</span> Get peace of mind with live map
          tracking, confirmations and signature verifications. <br />
          <span className="font-bold text-xl">● Security
            & Reliability:</span> Fully insured, background-checked and verified riders
          are at your service.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor=".service_animation"
        data-aos-offset="500"
        data-aos-duration="400"
        className="max-w-screen-xl mx-auto 2xl:px-0 md:px-16">
        <h1 className="text-4xl text-center font-pppins mt-20">
          Delivery Charges
        </h1>
        <div>
          <div className="grid grid-cols-4 gap-1 nd:gap-5 mt-16 px-2 md:px-0">
            <div>
              <h1 className="p-1 md:p-3 flex justify-center items-center md:font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center">
                Package Weight
              </h1>
              <div className="bg-[#020531] text-white font-pppins rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5">
                <h1 className="md:text-xl font-semibold mb-2">
                  Standard up to 1kg
                </h1>
                <h1 className="md:text-xl font-semibold mb-2">
                  Per Additional kg
                </h1>
              </div>
            </div>
            <div>
              <h1 className="p-1 md:p-3 flex justify-center items-center md:font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center">
                Inside Dhaka
              </h1>
              <div className="bg-[#020531] text-white font-pppins rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5 text-center">
                <h1 className="md:text-xl font-semibold mb-2">70 Tk</h1>
                <h1 className="md:text-xl font-semibold mb-2">20 Tk</h1>
              </div>
            </div>
            <div>
              <h1 className="p-1 md:p-3 flex justify-center items-center md:font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center">
                Dhaka Sub-Area
              </h1>
              <div className="bg-[#020531] text-white font-pppins rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5 text-center">
                <h1 className="ms:text-xl font-semibold mb-2">110 Tk</h1>
                <h1 className="ms:text-xl font-semibold mb-2">25 Tk</h1>
              </div>
            </div>
            <div>
              <h1 className="p-1 md:p-3 flex justify-center items-center md:font-pppins bg-[#CFFCFF] rounded-bl-3xl rounded-tr-3xl text-center">
                Outside Dhaka
              </h1>
              <div className="bg-[#020531] text-white font-pppins rounded-tl-3xl rounded-br-3xl p-5 flex flex-col divide-y mt-5 text-center">
                <h1 className="md:text-xl font-semibold mb-2">130 Tk</h1>
                <h1 className="md:text-xl font-semibold mb-2">30 Tk</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-2 items-cente mt-10 gap-5 px-2 md:px-0">
              <div className="bg-[#E8F6FC] p-5 rounded-tl-3xl rounded-br-3xl flex justify-center items-center">
                <h1 className="text-2xl font-pppins">Cash On Delivery</h1>
              </div>
              <div className="divide-y-2 p-5 bg-[#E8F6FC] rounded-tl-3xl rounded-br-3xl">
                <h1 className="text-xl">
                  0% COD charge for the Same District delivery
                </h1>
                <h1 className="text-xl mt-3">
                  1% COD charge for Outside Dhaka
                </h1>
              </div>
            </div>
            <div className="grid md:grid-cols-2 items-cente mt-10 gap-5 px-2 md:px-0">
              <div className="bg-[#E8F6FC] p-5 rounded-tl-3xl rounded-br-3xl divide-y-2">
                <h1 className="text-2xl font-pppins">
                  Exchange & Partial Delivery Service
                </h1>
                <h1 className="mt-3">
                  For Exchange and Partial delivery, an additional 50% of the
                  delivery charge will apply to cover the inbound cost, in
                  addition to one forward delivery charge.
                </h1>
              </div>
              <div className="divide-y-2 p-5 bg-[#E8F6FC] rounded-tl-3xl rounded-br-3xl">
                <h1 className="text">
                  * All charges are including VAT and Tax
                </h1>
                <h1 className="text mt-3">
                  * No additional charge on Return. Only one attempted delivery
                  charge is applicable
                </h1>
                <h1 className="text mt-3">* We serve upto 5 kg parcel.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
