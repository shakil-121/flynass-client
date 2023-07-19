import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cover1 from "../assets/images/dashboardCover.png";
import cover2 from "../assets/images/dashboardCover2.png";
import cover3 from "../assets/images/dashboardCover3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
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
        className="mySwiper  rounded-lg"
      >
        <SwiperSlide>
          <img className="" src={cover1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={cover2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={cover3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
