import { Link } from "react-router-dom";
import pic1 from "../../../assets/ChooseUs/pic1.jpg";
import pic2 from "../../../assets/ChooseUs/pic2.jpg";
import SectionTitle from "../../../Component/SectionTitle";
import { FaCar, FaMoneyBillAlt, FaUser } from "react-icons/fa";
import {
  FcClock,
  FcBullish,
  FcCallback,
  FcCalendar,
  FcShipped,
} from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const ChooseUs = () => {
  return (
    <div className="group_animation max-w-screen-xl mx-auto">
      <div className="mt-28">
        <div className="text-center">
          <SectionTitle
            subHeading="why choose us"
            heading="Your Parcel, Our Priority - Always"
          />
          <p className="font-semibold">
            Exceptional Parcel Handling - Where Precision Meets Passion.Your
            Trust, Our Reward: The Parcel Partner You Need.
          </p>

          {/* <Link to='/coverage'>
                        <button className='btn bg-[#ff8a00] mt-5'>Learn More ---</button>
                    </Link> */}
        </div>
        <div 
         data-aos="fade-up"
         data-aos-anchor=".group_animation"
         data-aos-offset="500"
         data-aos-duration="400"
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 mt-20 p-4">
          <div className="p-4 bg-[#F4FBFE] flex flex-col gap-4">
            <FcClock className="text-6xl mx-auto -mt-10" />
            <h1 className="text-xl font-pppins text-center">
              Realtime Tracking
            </h1>
            <p className="font-pppins text-center">
              International standard <br /> tracking via online
            </p>
          </div>
          <div className="p-4 bg-[#F4FBFE] flex flex-col gap-4">
            <FcBullish className="text-6xl mx-auto -mt-10" />
            <h1 className="text-xl font-pppins text-center">
            Smart Check
            </h1>
            <p className="font-pppins text-center">
            Access to customers’ <br /> previous
             delivery records to determine possible delivery or return
            </p>
          </div>

          <div className="p-4 bg-[#F4FBFE] flex flex-col gap-4">
            <FaUser className="text-6xl mx-auto -mt-10" />
            <h1 className="text-xl font-pppins text-center">
            Dedicated Relationship Team
            </h1>
            <p className="font-pppins text-center">
            Team that takes care of your orders, day in day out
            </p>
          </div>

          <div className="p-4 bg-[#F4FBFE] flex flex-col gap-4">
            <FaMoneyBillAlt className="text-6xl mx-auto -mt-10" />
            <h1 className="text-xl font-pppins text-center">
            Cash on Delivery Service
            </h1>
            <p className="font-pppins text-center">
            Payment collection after successful delivery
            </p>
          </div>
          <div className="p-4 bg-[#F4FBFE] flex flex-col gap-4">
            <FcCallback className="text-6xl mx-auto -mt-10" />
            <h1 className="text-xl font-pppins text-center">
            Dedicated Call Center
            </h1>
            <p className="font-pppins text-center">
            A team of well trained professionals to listen and solve your queries
            </p>
          </div>
          <div className="p-4 bg-[#F4FBFE] flex flex-col gap-4">
            <FaCar className="text-6xl mx-auto -mt-10" />
            <h1 className="text-xl font-pppins text-center">
            Nationwide Doorstep Pick-up
            </h1>
            <p className="font-pppins text-center">
            Doorstep pickup from anywhere around the country
            </p>
          </div>
          <div className="p-4 bg-[#F4FBFE] flex flex-col gap-4">
            <FcCalendar className="text-6xl mx-auto -mt-10" />
            <h1 className="text-xl font-pppins text-center">
            Merchant Payment within 1 Day
            </h1>
            <p className="font-pppins text-center">
            Guaranteed merchant payment within 24 hours of the delivery
            </p>
          </div>
          <div className="p-4 bg-[#F4FBFE] flex flex-col gap-4">
            <FcShipped className="text-6xl mx-auto -mt-10" />
            <h1 className="text-xl font-pppins text-center">
            Fastest Doorstep Delivery
            </h1>
            <p className="font-pppins text-center">
            Next Day doorstep Delivery inside Dhaka. 24- 72 hours Delivery for rest of Bangladesh
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="md:text-8xl text-6xl -z-10 font-bold opacity-20 text-center mb-10">
        PARCEL DELIVERY
        </h1>
      </div>
    </div>
  );
};

export default ChooseUs;
