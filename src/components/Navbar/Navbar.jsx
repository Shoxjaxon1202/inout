import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // i18next dan foydalanish

import logo from "../../assets/img/logo.png";
import lang1 from "../../assets/img/langUzb.png";
import lang2 from "../../assets/img/langEng.png";
import lang3 from "../../assets/img/langRus.png";
import telegram from "../../assets/img/telegram.svg";
import download from "../../assets/img/download.svg";
import ariza from "../../assets/img/ariza.svg";

import "./navbar.scss";
import "../../i18n"; // i18n konfiguratsiyasini import qilish

const Navbar = () => {
  const { t, i18n } = useTranslation(); // tilni olish va o'zgartirish

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleTelegramClick = () => {
    const telegramLink = "https://t.me/Shox_X7";
    window.open(telegramLink, "_blank");
  };

  return (
    <nav className="navbar">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <NavLink className="navbar_logo_link">
            <img src={logo} alt="" className="navbar_img" />
          </NavLink>
          <div className="link">
            <a
              target="_blank"
              className="link-btn one"
              href="https://t.me/My_VALLEY">
              <img src={telegram} alt="telegram" width="20" height="20" />
              <p className="link-text">{t("telegram")}</p>
            </a>
            <button className="link-btn three">
              <img src={download} alt="download" width="20" height="20" />
              <p className="link-text">{t("download")}</p>
            </button>
            <a href="#registration" className="link-btn three">
              <img src={ariza} alt="download" width="20" height="20" />
              <p className="link-text">{t("apply")}</p>
            </a>
          </div>
        </div>
        <div className="navbar_right">
          <div
            className="navbar_lang"
            onClick={() => handleLanguageChange("uz")}>
            <img src={lang1} alt="" className="navbar_langImg" />
            <h4 className="navbar_langText">UZ</h4>
          </div>
          <div
            className="navbar_lang"
            onClick={() => handleLanguageChange("en")}>
            <img src={lang2} alt="" className="navbar_langImg" />
            <h4 className="navbar_langText">EN</h4>
          </div>
          <div
            className="navbar_lang"
            onClick={() => handleLanguageChange("ru")}>
            <img src={lang3} alt="" className="navbar_langImg" />
            <h4 className="navbar_langText">RU</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
