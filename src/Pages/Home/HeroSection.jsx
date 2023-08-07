import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./HeroSection.scss";
import van from "../../assets/images/van.png";
import Lottie from "lottie-react";
import bikeanimation from "../../../public/bike.json";
import delivaryanimation from "../../../public/2 animation combined.json";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // const handleType = (count: number) => {
  //   // access word count number
  //   console.log(count)}
  // }

  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`)
  // }

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper max-w-screen-xl mx-auto z-10"
      >
        <SwiperSlide>
          <div className="md:h-[95vh]   bg-gradient-to-l bg-[#1E8FD0]  md:flex flex-col">
            <div className="md:w-[70%] w-full md:px-10 px-4 py-4">
              <div className="text-center md:text-left text-6xl md:text-8xl">
                <h1 className="text-design  text-white font-bold md:mt-32 mt-20">
                  {" "}
                  WHOLE
                </h1>
                {/* <h1 className="  text-white text-4xl md:text-8xl font-bold">
                  BANGLADESH
                </h1> */}
                <h1 className="  text-white text-4xl md:text-8xl font-bold">
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["BANGLADESH", "We Provide", "Parcel Delivery", "Service"]}
                    loop={20}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={80}
                    delaySpeed={10}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                  />
                </h1>
              </div>
              <br />
              <br />
              <p className="text-white  font-pppins text-base">
                Flynass is the strongest doorstep delivery network of Bangladesh
                with nationwide <br /> doorstep delivery, nationwide doorstep
                pickup, cash on delivery, warehousing and
                fulfillment facilities.
              </p>{" "}
              <br />
              <div className="flex items-center justify-center md:justify-start">
                <Link
                  to="/registration"
                  className="btn btn-outline font-pppins rounded-lg  px-6 border-white text-white  md:text-xl text-base "
                >
                  Registration 
                </Link>
              </div>
            </div>
            <div className="background-animated   md:w-[24%] w-full md:right-0">
              <img
                className="md:-ms-36 img-bounce md:pt-16 md:mt-28 h-[450px]"
                src={van}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="md:h-[95vh]   bg-gradient-to-l bg-[#1E8FD0]  md:flex">
            <div className="md:w-[60%] w-full md:px-10 px-4 py-4">
              <div className="text-center md:text-left text-6xl md:text-8xl">
                <h1 className="text-design  text-white font-bold md:mt-32 mt-20">
                  {" "}
                  TO EVERY
                </h1>
                <h1 className=" text-white font-bold">DISTRICT</h1>
              </div>
              <br />
              <br />
              <p className="text-white font-pppins  text-base">
                Flynass is the strongest doorstep delivery network of Bangladesh
                with nationwide <br /> doorstep delivery, nationwide doorstep
                pickup, cash on delivery, warehousing and
                fulfillment facilities.
              </p>{" "}
              <br />
              <div className="flex items-center justify-center md:justify-start">
              <Link
                  to="/registration"
                  className="btn btn-outline font-pppins  rounded-lg  px-6 border-white text-white  md:text-xl text-base "
                >
                  Registration 
                </Link>
              </div>
            </div>
            <div className="md:w-[40%] w-full md:right-0  my-auto">
              <Lottie
                className="opacity-70 h-96"
                animationData={bikeanimation}
                loop={true}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="md:h-[95vh]   bg-gradient-to-l bg-[#1E8FD0]  md:flex">
            <div className="md:w-[60%] w-full md:px-10 px-4 py-4">
              <div className="text-center md:text-left text-6xl md:text-8xl">
                <h1 className="text-design  text-white font-bold md:mt-32 mt-20">
                  {" "}
                  READY
                </h1>
                <h1 className=" text-white font-bold">TO MOVE</h1>
              </div>
              <br />
              <br />
              <p className="text-white  font-pppins text-base">
                Flynass is the strongest doorstep delivery network of Bangladesh
                with nationwide <br /> doorstep delivery, nationwide doorstep
                pickup, cash on delivery, warehousing and
                fulfillment facilities.
              </p>{" "}
              <br />
              <div className="flex items-center justify-center md:justify-start">
              <Link
                  to="/registration"
                  className="btn btn-outline font-pppins  rounded-lg  px-6 border-white text-white  md:text-xl text-base "
                >
                  Registration 
                </Link>
              </div>
            </div>
            <div className="md:w-[40%] w-full md:right-0  my-auto">
              <Lottie
                className="opacity-70"
                animationData={delivaryanimation}
                loop={true}
              />
            </div>
          </div>
        </SwiperSlide>

        {/* old 2nd slider */}
        {/* <SwiperSlide>
          <div className="h-[90vh] bg-gradient-to-l bg-[#1E8FD0] flex">
            <div className="md:w-[60%] px-10 py-4">
              <h1 className="text-design text-6xl text-white font-bold mt-32">
                TO EVERY
              </h1>
              <h1 className="text-6xl text-white font-bold">DISTRICT</h1>
              <br />
              <br />
              <p className="text-white text-xl">
                Flynass is the strongest doorstep delivery network of Bangladesh with nationwide doorstep delivery, nationwide doorstep pickup, cash on delivery, warehousing and fulfillment facilities.
              </p>{" "}
              <br />
              <button className="btn btn-outline rounded-none px-6 border-white text-white text-xl">
                VIEW SERVICES
              </button>
            </div>
            <div className="w-[80%] md:w-[40%]  md:right-0 mt-20">
              <Lottie className="opacity-70" animationData={bikeanimation} loop={true} />
            </div>
          </div>
        </SwiperSlide> */}

        {/* old 3rd slider */}
        {/* <SwiperSlide>
          <div className="h-[90vh] bg-gradient-to-l bg-[#1E8FD0] flex">
            <div className="md:w-[60%] px-10 py-4">
              <h1 className="text-design text-6xl text-white font-bold mt-32">
                READY
              </h1>
              <h1 className="text-6xl text-white font-bold">TO MOVE</h1>
              <br />
              <br />
              <p className="text-white text-xl">
                Flynass is the strongest doorstep delivery network of Bangladesh with nationwide doorstep delivery, nationwide doorstep pickup, cash on delivery, warehousing and fulfillment facilities.
              </p>
              <br />
              <button className="btn btn-outline rounded-none px-6 border-white text-white text-xl">
                VIEW SERVICES
              </button>
            </div>
            <div className="w-[80%] md:w-[40%] pt-28  md:right-0">
              <Lottie className="opacity-70" animationData={delivaryanimation} loop={true} />
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default HeroSection;
