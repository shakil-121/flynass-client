import waves from "../../../assets/CompanyApproch/waves.png";
import avatar from "../../../assets/CompanyApproch/c-pic1.png";
import van from "../../../assets/CompanyApproch/c-pic2.png";
import Tech from "../../../assets/CompanyApproch/c-pic3.png";
import SectionTitle from "../../../Component/SectionTitle";
import "./CompannyApproch.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const CompanyApproch = () => {
  return (
    <div className="mt-28 font-pop max-w-screen-xl mx-auto  2xl:px-0 md:px-16 px-5 mb-10">
      <div className="grid md:grid-cols-2 md:justify-items-end justify-items-center items-center">
        <div>
          <SectionTitle
            className="text-left"
            subHeading="Company Approch"
            heading="Reliable Parcel Delivery  Solutions"
          ></SectionTitle>
          <p className="mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry the <br /> standard dummy text ever since the when an
            printer took.
          </p>
        </div>
        <div className="mb-10 md:mb-0">
          <Link to="/signup">
            <button className="bg-[#1E8FD0] rounded-xl px-6 py-3 text-white font-bold">
              Merchant Registration
            </button>
          </Link>
        </div>
      </div>
      <div className="">
          {/* This section just for design purposes */}
        {/* <div className="hidden md:block bg-[#F98A06] w-72 h-96">
        </div> */}
        <div className="bg-white md:ms-16 waves md:p-7 p-3 shadow-2xl shadow-[#7ABDE2] mb-10">
          <div className="md:flex items-center gap-x-20 mb-2">
            <div>
              <h1 className="md:text-[96px] text-[250px] text-bg">02</h1>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
              Year's of experience in transport <br /> and logistics services
            </h1>
          </div>
          <div className="grid md:grid-cols-3 justify-center gap-10 ">
            <div className="flex items-center gap-5">
              <img className="w-20" src={avatar} alt="" />
              <div>
                <h1 className="text-6xl font-bold mb-3">
                  <CountUp end={150}  duration={10}/>+
                </h1>
                <h3 className="text-2xl font-bold">Professional Staff</h3>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img className="w-20" src={van} alt="" />
              <div>
                <h1 className="text-6xl font-bold mb-3"> <CountUp end={15000}  duration={10}/>+</h1>
                <h3 className="text-2xl font-bold">On Time Delievery</h3>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img className="w-20" src={Tech} alt="" />
              <div>
                <h1 className="text-6xl font-bold mb-3"> <CountUp end={150}  duration={10}/>+</h1>
                <h3 className="text-2xl font-bold">Technology & Media</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyApproch;
