import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // i18n kutubxonasini import qilish

import "./bottomNav.scss";
import search from "../../assets/img/search.svg";
import time from "../../assets/img/time.svg";
import tel from "../../assets/img/tel.svg";
import sun from "../../assets/img/sunIcon.png";
import like from "../../assets/img/likeIcon.svg";

const BottomNav = () => {
  const inputEl = useRef(null);
  let typed = useRef(null);
  const { t } = useTranslation(); // i18n funksiyasini olish

  useEffect(() => {
    const options = {
      strings: [t("avtobus"), t("led"), t("bilboard")],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    };

    typed.current = new Typed(inputEl.current, options);

    return () => {
      typed.current.destroy(); // Component unmounted bo'lganda o'chirish
    };
  }, [t]);

  return (
    <div className="bottomnav">
      <div className="bottomnav_wrapper">
        <div className="bottomnav_left">
          <ul className="bottomnav_list">
            <li className="bottomnav_item">
              <NavLink to={"/home"}>{t("asosiy")}</NavLink>
            </li>
            <li className="bottomnav_item">
              <NavLink to={"/services"}>{t("xizmatlar")}</NavLink>
            </li>
            <li id="biz" className="bottomnav_item">
              <NavLink to={"/about"}>
                <span>{t("biz")}</span>
                <span>{t("haqimizda")}</span>
              </NavLink>
            </li>
            <li className="bottomnav_item">
              <NavLink to={"/contact"}>{t("kontakt")}</NavLink>
            </li>
            <li className="bottomnav_item">
              <NavLink to={"/vakansiya"}>{t("vakansiya")}</NavLink>
            </li>
            <li className="bottomnav_item">
              <a href="#reviews">{t("sharhlar")}</a>
            </li>
          </ul>
          <form className="bottomnav_form">
            <img src={search} alt="" className="bottomnav_form_img" />
            <input
              type="text"
              className="bottomnav_input"
              ref={inputEl}
              placeholder={t("placeholder")} // placeholder uchun tarjima
            />
          </form>
        </div>
        <div className="bottomnav_right">
          <div className="bottomnav_contact">
            <div className="bottomnav_card">
              <img src={time} alt="" className="bottomnav_icon" />
              <h4 className="bottomnav_title">{t("time")}</h4>
            </div>
            <div className="bottomnav_card">
              <img src={tel} alt="" className="bottomnav_icon" />
              <h4 className="bottomnav_title">
                <a href="tel:+998 55 201 90 10">+998 55 201 90 10</a>
              </h4>
            </div>
          </div>
          <div className="bottomnav_modes">
            <img src={sun} alt="" className="bottomnav_mode" />
            <NavLink to={"/likes"}>
              <img src={like} alt="" className="bottomnav_mode" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
