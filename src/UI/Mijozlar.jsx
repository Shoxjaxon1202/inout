import React from "react";
import "../styles/mijozlar.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import mijoz1 from "../assets/img/mijozlar1.jpg";
import mijoz2 from "../assets/img/mijozlar2.png";
import mijoz3 from "../assets/img/mijozlar3.jpg";
import mijoz4 from "../assets/img/mijozlar4.png";
import mijoz5 from "../assets/img/mijozlar5.png";
import mijoz6 from "../assets/img/mijozlar6.jpg";
import mijoz7 from "../assets/img/mijozlar7.png";
import mijoz8 from "../assets/img/mijozlar8.png";
import mijoz9 from "../assets/img/mijozlar9.png";
import mijoz10 from "../assets/img/mijozlar10.jpeg";
import mijoz11 from "../assets/img/mijozlar11.png";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
const Mijozlar = () => {
  return (
    <div className="mijozlar">
      <div className="mijozlar_wrapper">
        <div className="mijozlar_top">
          <div className="mijozlar_top_left">
            <h2 className="mijozlar_title">Ishonchli mijozlar</h2>
            <p className="mijozlar_text">
              Davom etilmoqda... Sizning logoyingiz uchun ham joy mavjud
            </p>
          </div>
          <div className="mijozlar_top_right">
            <button className="video_btn">Mijoz bo'lish</button>
          </div>
        </div>
        <Swiper
          autoplay={true}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={false}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mijozlar_swiper">
          <SwiperSlide className="mijozlar_slide">
            <img src={mijoz1} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide className="mijozlar_slide">
            <img src={mijoz2} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide className="mijozlar_slide">
            <img src={mijoz3} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide className="mijozlar_slide">
            <img src={mijoz4} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide className="mijozlar_slide">
            <img src={mijoz5} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide className="mijozlar_slide">
            <img src={mijoz6} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide className="mijozlar_slide">
            <img src={mijoz7} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide className="mijozlar_slide">
            <img src={mijoz8} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide className="mijozlar_slide">
            <img src={mijoz9} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide className="mijozlar_slide">
            <img src={mijoz10} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide className="mijozlar_slide">
            <img src={mijoz11} alt="" className="mijozlar_img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Mijozlar;
