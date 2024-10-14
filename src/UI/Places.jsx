import React from "react";

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

const Places = () => {
  return (
    <div className="place">
      <div className="place_wrapper">
        <h3 className="place_title">
          Sizning reklamangiz uchun{" "}
          <span className="place_span">joylar...</span>
        </h3>
        <div className="map">
          <iframe
            className="map_item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.847390653015!2d69.21706091543825!3d41.29949597929915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefc007aa15b05%3A0x50d64d50b1d54bb1!2z0KLQtdC90LDRg9C70YvQuNGA0LDQudC40L3QuNGB0YLRg9Cw0LzRjyDQu9C40YfQvdCw0Y8g0LTQsNCy0LDRgtC10LvQutC-0LrQvtC9!5e0!3m2!1sen!2suz!4v1697545568547!5m2!1sen!2suz"
            width="100%" // Bu yerda kenglikni 100% ga o'zgartirdik
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"></iframe>
        </div>
        <div className="place_cards">
          <div className="place_card">
            <img src={rasm1} alt="" className="place_img" />
            Barcha afishalar
          </div>
          <div className="place_card">
            <img src={rasm2} alt="" className="place_img" />
            Bo'sh
          </div>
          <div className="place_card">
            <img src={rasm3} alt="" className="place_img" />
            Band qilingan
          </div>
          <div className="place_card">
            <img src={rasm4} alt="" className="place_img" />
            Viloyatlar bo'yicha
          </div>
          <div className="place_card">
            <img src={rasm5} alt="" className="place_img" />
            Bayroq ustunlari
          </div>
          <div className="place_card">
            <img src={rasm6} alt="" className="place_img" />
            Bilboardlar
          </div>
          <div className="place_card">
            <img src={rasm7} alt="" className="place_img" />
            Banner stendi
          </div>
          <div className="place_card">
            <img src={rasm8} alt="" className="place_img" />
            Prizmatronlar
          </div>
          <div className="place_card">
            <img src={rasm9} alt="" className="place_img" />
            Xavfsizlik devori
          </div>
          <div className="place_card">
            <img src={rasm10} alt="" className="place_img" />
            Shahar formatlari
          </div>
          <div className="place_card">
            <img src={rasm11} alt="" className="place_img" />
            LED Monitor
          </div>
        </div>
        <div className="video">
          <div className="video_top">
            <h3 className="video_title">Video</h3>
            <button className="video_btn btn">
              <a href="/videos">Barcha Videolar</a>
            </button>
          </div>
          <Videos />
        </div>
      </div>
    </div>
  );
};

export default Places;
