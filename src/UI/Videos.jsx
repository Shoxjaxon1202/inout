import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/videos.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Videos() {
  return (
    <div className="videos-container">
      <Swiper
        direction="horizontal" // Gorizontal slaydlar uchun
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
        className="videos-swiper">
        <SwiperSlide className="videos-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="videos-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="videos-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="videos-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="videos-slide">Slide 5</SwiperSlide>
        <SwiperSlide className="videos-slide">Slide 6</SwiperSlide>
        <SwiperSlide className="videos-slide">Slide 7</SwiperSlide>
        <SwiperSlide className="videos-slide">Slide 8</SwiperSlide>
        <SwiperSlide className="videos-slide">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
