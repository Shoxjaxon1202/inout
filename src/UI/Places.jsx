import React from "react";
import { useTranslation } from "react-i18next"; // i18next kutubxonasidan foydalanamiz

import rasm1 from "../assets/img/place1.png";
import rasm2 from "../assets/img/place2.png";
import rasm3 from "../assets/img/place3.png";
import rasm4 from "../assets/img/place4.png";
import rasm5 from "../assets/img/place5.png";
import rasm6 from "../assets/img/place6.png";
import rasm7 from "../assets/img/place7.png";
import rasm8 from "../assets/img/place1.png"; // O'zgaruvchilarni to'ldiring
import rasm9 from "../assets/img/place2.png"; // O'zgaruvchilarni to'ldiring
import rasm10 from "../assets/img/place3.png"; // O'zgaruvchilarni to'ldiring
import rasm11 from "../assets/img/place4.png"; // O'zgaruvchilarni to'ldiring

import "../styles/places.scss";
import Videos from "./Videos";
import { NavLink } from "react-router-dom";

const Places = () => {
  const { t } = useTranslation(); // useTranslation dan t funksiyasini chaqiramiz

  return (
    <div className="place">
      <div className="place_wrapper">
        <h3 className="place_title">
          {t("your_ad_places")}{" "}
          <span className="place_span">{t("places")}</span>
        </h3>
        <div className="map">
          <iframe
            className="map_item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.847390653015!2d69.21706091543825!3d41.29949597929915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefc007aa15b05%3A0x50d64d50b1d54bb1!2z0KLQtdC90LDRg9C70YvQuNGA0LDQudC40L3QuNGB0YLRg9Cw0LzRjyDQu9C40YfQvdCw0Y8g0LTQsNCy0LDRgtC10LvQutC-0LrQvtC9!5e0!3m2!1sen!2suz!4v1697545568547!5m2!1sen!2suz"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"></iframe>
        </div>
        <div className="place_cards">
          <div className="place_card">
            <img src={rasm1} alt="" className="place_img" />
            {t("all_posters")}
          </div>
          <div className="place_card">
            <img src={rasm2} alt="" className="place_img" />
            {t("empty")}
          </div>
          <div className="place_card">
            <img src={rasm3} alt="" className="place_img" />
            {t("reserved")}
          </div>
          <div className="place_card">
            <img src={rasm4} alt="" className="place_img" />
            {t("by_regions")}
          </div>
          <div className="place_card">
            <img src={rasm5} alt="" className="place_img" />
            {t("flagpoles")}
          </div>
          <div className="place_card">
            <img src={rasm6} alt="" className="place_img" />
            {t("billboards")}
          </div>
          <div className="place_card">
            <img src={rasm7} alt="" className="place_img" />
            {t("banner_stands")}
          </div>
          <div className="place_card">
            <img src={rasm8} alt="" className="place_img" />
            {t("prismatrons")}
          </div>
          <div className="place_card">
            <img src={rasm9} alt="" className="place_img" />
            {t("security_boundary")}
          </div>
          <div className="place_card">
            <img src={rasm10} alt="" className="place_img" />
            {t("city_formats")}
          </div>
          <div className="place_card">
            <img src={rasm11} alt="" className="place_img" />
            {t("led_monitor")}
          </div>
        </div>
        <div className="video">
          <div className="video_top">
            <h3 className="video_title">{t("video")}</h3>
            <NavLink to="/videos">
              <button className="video_btn btn">{t("all_videos")}</button>
            </NavLink>
          </div>
          <Videos />
        </div>
      </div>
    </div>
  );
};

export default Places;
