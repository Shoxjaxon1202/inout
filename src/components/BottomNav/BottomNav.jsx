import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { WbSunny, NightlightRound } from "@mui/icons-material"; // Material UI'dan ikona
import "./bottomNav.scss";
import search from "../../assets/img/search.svg";
import time from "../../assets/img/time.svg";
import tel from "../../assets/img/tel.svg";
import like from "../../assets/img/likeIcon.svg";

const BottomNav = () => {
  const [isDark, setIsDark] = useState(false);
  const [inputDarkMode, setInputDarkMode] = useState(false);

  // Dark mode uchun funksiyani aniqlash
  const handleDark = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const con = document.getElementById("routes");
    if (isDark) {
      con.classList.add("darkmode");
    } else {
      con.classList.remove("darkmode");
    }
  }, [isDark]);

  // Input uchun dark mode
  const handleInputDarkMode = () => {
    setInputDarkMode(!inputDarkMode);
  };

  const inputEl = useRef(null);
  let typed = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const options = {
      strings: [t("avtobus"), t("led"), t("bilboard")],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    };

    typed.current = new Typed(inputEl.current, options);

    return () => {
      typed.current.destroy();
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
            <img src={search} alt="Search" className="bottomnav_form_img" />
            <input
              type="text"
              className={`bottomnav_input ${inputDarkMode ? "darkmode" : ""}`}
              ref={inputEl}
              placeholder={t("placeholder")}
              onClick={handleInputDarkMode}
            />
          </form>
        </div>
        <div className="bottomnav_right">
          <div className="bottomnav_contact">
            <div className="bottomnav_card">
              <img src={time} alt="Time" className="bottomnav_icon" />
              <h4 className="bottomnav_title">{t("time")}</h4>
            </div>
            <div className="bottomnav_card">
              <img src={tel} alt="Telephone" className="bottomnav_icon" />
              <h4 className="bottomnav_title">
                <a href="tel:+998 55 201 90 10">+998 55 201 90 10</a>
              </h4>
            </div>
          </div>
          <div className="bottomnav_modes">
            <div className="dark_mode_switch" onClick={handleDark}>
              {isDark ? (
                <NightlightRound style={{ color: "#757575" }} /> // Moon icon (tun rejimi)
              ) : (
                <WbSunny style={{ color: "#FFC107" }} /> // Sun icon (kun rejimi)
              )}
            </div>
            <NavLink to={"/likes"}>
              <img
                src={like}
                alt="Like"
                className={`bottomnav_mode ${isDark ? "darkmode_icon" : ""}`}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
