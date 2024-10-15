import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/whatwedo.scss";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import rasm1 from "../assets/img/nima1.jpeg";
import rasm2 from "../assets/img/nima2.png";
import rasm3 from "../assets/img/nima3.jpeg";
import rasm4 from "../assets/img/nima4.jpg";
import rasm5 from "../assets/img/nima5.jpg";
import rasm7 from "../assets/img/nima7.jpg";

export default function WhatWeDo() {
  const { t } = useTranslation();

  const slides = t("slides", { returnObjects: true });

  const images = [rasm1, rasm2, rasm3, rasm4, rasm5, rasm7];

  return (
    <div className="do">
      <div className="do_wrapper">
        <h3 className="do_title">{t("title")}</h3>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}>
          {slides.map((slide, index) => (
            <SwiperSlide className="customSlide" key={index}>
              <div className="customSlide_left">
                <img src={images[index]} alt="" className="do_img" />
              </div>
              <div className="customSlide_right">
                <h4 className="do_subtitle">{slide.subtitle}</h4>
                <p className="do_subtext">{slide.text}</p>
                <button className="do_btn">{slide.button}</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
