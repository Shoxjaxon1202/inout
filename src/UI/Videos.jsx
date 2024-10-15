import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/videos.scss";
import { Autoplay, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next"; // useTranslation ni import qilish

import rasm1 from "../assets/img/opa.jpg";
import rasm2 from "../assets/img/opa.jpg";
import rasm3 from "../assets/img/opa.jpg";
import rasm4 from "../assets/img/opa.jpg";
import rasm5 from "../assets/img/download.png";
import rasm6 from "../assets/img/gilam.jpeg";
import rasm7 from "../assets/img/car.png";
import rasm8 from "../assets/img/opa.jpg";

import videoFile from "../assets/img/video.mp4"; // Videoni import qilish

export default function Videos() {
  const { t } = useTranslation(); // useTranslation dan foydalanish
  const [isPlaying, setIsPlaying] = useState(new Array(8).fill(false)); // Barcha slaydlar uchun holat
  const swiperRef = useRef(null); // Swiperga referens

  const handlePlayClick = (index) => {
    setIsPlaying((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });

    // Autoplayni to'xtatish
    if (swiperRef.current && swiperRef.current.swiper.autoplay) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleVideoEnd = (index) => {
    setIsPlaying((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });

    // Autoplayni qayta ishga tushirish
    if (swiperRef.current && swiperRef.current.swiper.autoplay) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div className="videos-container">
      <Swiper
        ref={swiperRef} // Referensni Swiperga berish
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="videos-swiper">
        {[rasm1, rasm2, rasm3, rasm4, rasm5, rasm6, rasm7, rasm8].map(
          (image, index) => (
            <SwiperSlide className="videos-slide" key={index}>
              <div className="video-slide">
                {!isPlaying[index] ? (
                  <>
                    <img src={image} alt={`Slide ${index + 1}`} />
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
                  </>
                ) : (
                  <video
                    className="video-slide-video"
                    src={videoFile}
                    controls
                    autoPlay
                    onEnded={() => handleVideoEnd(index)}
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
