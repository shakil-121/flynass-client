import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./HeroSection.scss";
import van from "../../assets/images/van.png";
import Lottie from "lottie-react";
import bikeanimation from "../../../public/Delivery boy on the way.json";
import delivaryanimation from "../../../public/2 animation combined.json";

import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

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
        className="mySwiper  -z-10"
      >
        <SwiperSlide>
          <div className="h-[75vh] bg-[#1e8fd0] flex">
            <div className="md:w-[80%] px-10 py-4">
              <h1 className="text-design text-9xl text-white font-bold">
                {" "}
                WHOLE
              </h1>
              <h1 className="text-9xl text-white font-bold">BANGLADESH</h1>
              <br />
              <br />
              <p className="text-white text-2xl">Lorem ipsum dolor sit amet  Sunt enim maiores numquam ducimus <br /> necessitatibus vero qui quos quibusdam labore non!</p> <br />
              <button className="btn btn-outline rounded-none px-6 border-white text-white text-xl">VIEW SERVICES</button>

            </div>
            <div className="background-animated w-[80%] md:w-[24%]  md:right-0">
              <img className="px-6 pt-16" src={van} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[75vh] bg-[#1e8fd0] flex">
            <div className="md:w-[60%] px-10 py-4">
              <h1 className="text-design text-9xl text-white font-bold">
                TO EVERY
              </h1>
              <h1 className="text-9xl text-white font-bold">DISTRICT</h1>
              <br />
              <br />
              <p className="text-white text-2xl">
                Lorem ipsum dolor sit amet Sunt enim maiores numquam ducimus{" "}
                <br /> necessitatibus vero qui quos quibusdam labore non!
              </p>{" "}
              <br />
              <button className="btn btn-outline rounded-none px-6 border-white text-white text-xl">
                VIEW SERVICES
              </button>
            </div>
            <div className="w-[80%] md:w-[40%]  md:right-0">
              <Lottie className="opacity-70" animationData={bikeanimation} loop={true} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[75vh] bg-[#1e8fd0] flex">
            <div className="md:w-[60%] px-10 py-4">
              <h1 className="text-design text-9xl text-white font-bold">
                READY
              </h1>
              <h1 className="text-9xl text-white font-bold">TO MOVE</h1>
              <br />
              <br />
              <p className="text-white text-2xl">
                Lorem ipsum dolor sit amet Sunt enim maiores numquam ducimus{" "}
                <br /> necessitatibus vero qui quos quibusdam labore non!
              </p>{" "}
              <br />
              <button className="btn btn-outline rounded-none px-6 border-white text-white text-xl">
                VIEW SERVICES
              </button>
            </div>
            <div className="w-[80%] md:w-[40%] pt-28  md:right-0">
              <Lottie className="opacity-70" animationData={delivaryanimation} loop={true} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
