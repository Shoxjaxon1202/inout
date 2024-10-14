import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/whatwedo.scss"; // CSS faylini import qiling

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import rasm1 from "../assets/img/nima1.jpeg";
import rasm2 from "../assets/img/nima2.png";
import rasm3 from "../assets/img/nima3.jpeg";
import rasm4 from "../assets/img/nima4.jpg";
import rasm5 from "../assets/img/nima5.jpg";
import rasm7 from "../assets/img/nima7.jpg";

export default function WhatWeDo() {
  return (
    <div className="do">
      <div className="do_wrapper">
        <h3 className="do_title">Biz nima qilamiz?</h3>
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
          <SwiperSlide className="customSlide">
            <div className="customSlide_left">
              <img src={rasm1} alt="" className="do_img" />
            </div>
            <div className="customSlide_right">
              <h4 className="do_subtitle">Avtobusda tashqi tomon</h4>
              <p className="do_subtext">
                Shaxar Avtobuslarining tashqi tomoniga raklaangizni joylashtirib
                beraiz...
              </p>
              <button className="do_btn">Ko'proq</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="customSlide">
            <div className="customSlide_left">
              <img src={rasm2} alt="" className="do_img" />
            </div>
            <div className="customSlide_right">
              <h4 className="do_subtitle">LED ekranlarda reklama</h4>
              <p className="do_subtext">
                Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta
                matnidir. Lorem Ipsum sanoat bo'lgan ...
              </p>
              <button className="do_btn">Ko'proq</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="customSlide">
            <div className="customSlide_left">
              <img src={rasm3} alt="" className="do_img" />
            </div>
            <div className="customSlide_right">
              <h4 className="do_subtitle">Reklama xizmati</h4>
              <p className="do_subtext">
                Komponiya tashqi reklama sohasida eng katta ko'lmi xizmatlarni
                taqdim etishga, poligrafiya va...
              </p>
              <button className="do_btn">Ko'proq</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="customSlide">
            <div className="customSlide_left">
              <img src={rasm4} alt="" className="do_img" />
            </div>
            <div className="customSlide_right">
              <h4 className="do_subtitle">HD Ekran</h4>
              <p className="do_subtext">
                Z-Edge 4K monitor, U28I4K 28 dyuymli IPS monitor Ultra HD
                3840x2160 IPS yangilanish...
              </p>
              <button className="do_btn">Ko'proq</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="customSlide">
            <div className="customSlide_left">
              <img src={rasm5} alt="" className="do_img" />
            </div>
            <div className="customSlide_right">
              <h4 className="do_subtitle">4K Monitor</h4>
              <p className="do_subtext">
                Z-Edge U27P4K 27-дюймовый игровой монитор Ultra HD 4K, частота
              </p>
              <button className="do_btn">Ko'proq</button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="customSlide">
            <div className="customSlide_left">
              <img src={rasm7} alt="" className="do_img" />
            </div>
            <div className="customSlide_right">
              <h4 className="do_subtitle">Salom Dunyo</h4>
              <p className="do_subtext">
                In fiction, the planet Mars, fourth from the Sun, has appeared
                as a setting in at least 5,000 works...
              </p>
              <button className="do_btn">Ko'proq</button>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
}
