import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../styles/introtexts.scss";
export default function App() {
  return (
    <div className="intro_texts">
      <Swiper className="mySwiper2">
        <SwiperSlide className="swiper-slide-texts">
          <div className="intro_card">
            <h4 className="intro_text">
              Xizmatlarimiz bilan to'liq tanishmas ekansiz....
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-texts">
          <div className="intro_card">
            <h4 className="intro_text">Yangi natijalarga erisha olmayapsizmi?</h4>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="intro_btn_card">
        <button className="intro_btn">Konsultatsiya olish</button>
      </div>
    </div>
  );
}
