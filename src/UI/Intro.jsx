import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube"; // Cube effekti uchun
import "swiper/css/pagination";
import "../styles/intro.scss";

import videoFile from "../assets/img/video.mp4";
import { EffectCube, Pagination } from "swiper/modules"; // Cube effekti uchun import
import SwiperText from "./SwiperText";
import rasm from "../assets/img/opa.jpg"; // Slayd uchun rasm

export default function App() {
  // Har bir slayd uchun o'z holatini saqlash
  const [isPlaying, setIsPlaying] = useState([false, false]);

  const handlePlayClick = (index) => {
    setIsPlaying((prev) => {
      const newState = [...prev];
      newState[index] = true; // Faollashtirilgan slaydni o'zgartirish
      return newState;
    });
  };

  const handleVideoEnd = (index) => {
    setIsPlaying((prev) => {
      const newState = [...prev];
      newState[index] = false; // Video tugagach, holatini tiklash
      return newState;
    });
  };

  return (
    <div className="intro">
        <div className="intro_wrapper">
        <SwiperText />
        <Swiper
          effect={"cube"} // Cube effektini qo'shish
          grabCursor={true}
          pagination={false}
          modules={[EffectCube, Pagination]} // Cube effekti moduli
          className="mySwiper">
          {[1, 2].map((_, index) => (
            <SwiperSlide key={index}>
              {!isPlaying[index] ? (
                <div className="slide">
                  <img
                    onClick={() => handlePlayClick(index)}
                    src={rasm}
                    alt="Slide Image"
                  />
                  <div
                    className="play-btn"
                    onClick={() => handlePlayClick(index)}>
                    <div className="play-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor">
                        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <video
                  src={videoFile}
                  controls
                  autoPlay
                  width="100%"
                  height="100%"
                  onEnded={() => handleVideoEnd(index)} // Video tugagach, holatini tiklash
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
