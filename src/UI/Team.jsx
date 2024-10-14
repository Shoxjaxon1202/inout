import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper komponentlari
import "swiper/css"; // Swiper uchun umumiy CSS
import "swiper/css/pagination"; // Pagination uchun CSS
import "swiper/css/navigation"; // Navigation uchun CSS

import { Autoplay, Pagination, FreeMode } from "swiper/modules"; // To'g'ri modul yo'lini ishlatish

import rasm1 from "../assets/img/qizlar1.jpg";
import rasm2 from "../assets/img/qizlar2.jpg";
import rasm3 from "../assets/img/qizlar3.png";
import rasm4 from "../assets/img/qizlar4.png";
import rasm5 from "../assets/img/qizlar5.png";
import rasm6 from "../assets/img/qizlar6.jpg";

import "../styles/team.scss";

const teamMembers = [
  {
    name: "Feruza",
    role: "Savdo bo'limi boshlig'i",
    image: rasm1, // To'g'ridan-to'g'ri yo'l
  },
  {
    name: "Alisa",
    role: "Dizayner",
    image: rasm2,
  },
  {
    name: "Mira",
    role: "Android Dasturchi",
    image: rasm3,
  },
  {
    name: "Lisa",
    role: "Sekretar",
    image: rasm4,
  },
  {
    name: "Pem",
    role: "Maxsulot Manajeri",
    image: rasm5,
  },
  {
    name: "Nasha",
    role: "Vloger",
    image: rasm6,
  },
];

export default function Team() {
  return (
    <div className="team">
      <div className="team_section">
        <div className="team_top">
          <div className="team_left">
            <h2 className="team_title">Bizning jamoamiz</h2>
            <p className="team_text">
              Bu sizning buyurtmangizni bajaradigan jamoa{" "}
              <span className="place_span">sifatli</span>,{" "}
              <span className="place_span">ishonchli</span> va{" "}
              <span className="place_span">xavfsiz</span>
            </p>
          </div>
          <button className="video_btn">
            <a href="/allteam">To'liq ro'yxatni ko'ring</a>
          </button>
        </div>

        <Swiper
          autoplay={true}
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={false}
          modules={[Autoplay, FreeMode, Pagination]}
          className="team_swiper">
          {teamMembers.map((member) => (
            <SwiperSlide key={member.name} className="team_member">
              <img
                src={member.image} // To'g'ridan-to'g'ri rasmlarni src'ga berish
                alt={member.name}
                className="member_image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social_icons">
                <a href="#intro" className="social_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a href="#intro" className="social_icon">
                  <svg
                    className="social_icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512">
                    <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                  </svg>
                </a>
                <a href="#intro" className="social_icon">
                  <svg
                    className="social_icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                </a>
              </div>
              <button id="team_btn" className="do_btn">
                Baholash
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
