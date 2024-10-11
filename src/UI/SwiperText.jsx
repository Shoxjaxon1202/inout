import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function App() {
  return (
    <div className="intro_texts">
      <Swiper className="mySwiper2">
        <SwiperSlide>
          <h4 className="intro_text">
            Xizmatlarimiz bilan to'liq tanishmas ekansiz....
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="intro_text">Yangi natijalarga erisha olmaysiz...</h4>
        </SwiperSlide>
      </Swiper>
      <button className="intro_btn">Konsultatsiya olish</button>
    </div>
  );
}
