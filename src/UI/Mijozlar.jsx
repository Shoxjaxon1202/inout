import React from "react";
import "../styles/mijozlar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next"; // Import useTranslation

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
  const { t } = useTranslation(); // useTranslation dan foydalanish

  return (
    <div className="mijozlar">
      <div className="mijozlar_wrapper">
        <div className="mijozlar_top">
          <div className="mijozlar_top_left">
            <h2 className="mijozlar_title">{t("mijozlar_title")}</h2>
            <p className="mijozlar_text">{t("mijozlar_text")}</p>
          </div>
          <div className="mijozlar_top_right">
            <a href="#intro">
              <button className="video_btn">{t("video_btn")}</button>
            </a>
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
          <SwiperSlide
            className="mijozlar_slide"
            onClick={() => window.open("https://click.uz", "_blank")}>
            <img src={mijoz1} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide
            className="mijozlar_slide"
            onClick={() => window.open("https://payme.uz", "_blank")}>
            <img src={mijoz2} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide
            className="mijozlar_slide"
            onClick={() => window.open("https://uzum.uz", "_blank")}>
            <img src={mijoz3} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide
            className="mijozlar_slide"
            onClick={() => window.open("https://www.fanta.com", "_blank")}>
            <img src={mijoz4} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide
            className="mijozlar_slide"
            onClick={() => window.open("https://www.pepsi.com", "_blank")}>
            <img src={mijoz5} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide
            className="mijozlar_slide"
            onClick={() => window.open("https://joyda.uz", "_blank")}>
            <img src={mijoz6} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide
            className="mijozlar_slide"
            onClick={() => window.open("https://www.coca-cola.com", "_blank")}>
            <img src={mijoz7} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide
            className="mijozlar_slide"
            onClick={() => window.open("https://www.turan-bank.uz", "_blank")}>
            <img src={mijoz8} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide
            className="mijozlar_slide"
            onClick={() => window.open("https://teamturan.com", "_blank")}>
            <img src={mijoz9} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide
            className="mijozlar_slide"
            onClick={() => window.open("https://www.turan.edu.kz", "_blank")}>
            <img src={mijoz10} alt="" className="mijozlar_img" />
          </SwiperSlide>
          <SwiperSlide
            className="mijozlar_slide"
            onClick={() => window.open("https://turanlar.uz", "_blank")}>
            <img src={mijoz11} alt="" className="mijozlar_img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Mijozlar;
