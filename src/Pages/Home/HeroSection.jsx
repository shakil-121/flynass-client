import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper"; 
import "./HeroSection.scss"

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
    <div className="mt-14">
      <Swiper

        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
          <div className="h-96 bg-orange-600">

            <div className="background-animated"></div>
            </div> 
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-orange-600"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-orange-600 "></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
