import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, FreeMode } from "swiper/modules";

import rasm1 from "../assets/img/qizlar1.jpg";
import rasm2 from "../assets/img/qizlar2.jpg";
import rasm3 from "../assets/img/qizlar3.png";
import rasm4 from "../assets/img/qizlar4.png";
import rasm5 from "../assets/img/qizlar5.png";
import rasm6 from "../assets/img/qizlar6.jpg";

import { useTranslation } from "react-i18next";
import "../styles/team.scss";
import { Instagram, Phone, Telegram } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const teamMembers = [
  {
    name: "Feruza",
    role: "Savdo bo'limi boshlig'i",
    image: rasm1,
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
  const { t } = useTranslation();

  return (
    <div className="team">
      <div className="team_section">
        <div className="team_top">
          <div className="team_left">
            <h2 className="team_title">{t("team_title")}</h2>
            <p className="team_text">{t("team_text")}</p>
          </div>
          <NavLink to="/allteam">
            <button className="video_btn">{t("view_full_list")}</button>
          </NavLink>
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
                src={member.image}
                alt={member.name}
                className="member_image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social_icons">
                <a href="#intro" className="social_icon">
                  <Instagram />
                </a>
                <a href="#intro" className="social_icon">
                  <Telegram />
                </a>
                <a href="#intro" className="social_icon">
                  <Phone />
                </a>
              </div>
              <button id="team_btn" className="do_btn">
                {t("evaluate")}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
