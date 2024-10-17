import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/img/logo.png";
import lang1 from "../../assets/img/langUzb.png";
import lang2 from "../../assets/img/langEng.png";
import lang3 from "../../assets/img/langRus.png";
import telegram from "../../assets/img/telegram.svg";
import downloadFile from "../../assets/img/download.svg"; // Faylni yuklash
import ariza from "../../assets/img/ariza.svg";

import "./navbar.scss";
import "../../i18n"; // i18n konfiguratsiyasini import qilish

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Foydalanuvchining oxirgi tanlangan tilini localStorage dan olish
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Tanlangan tilni localStorage ga saqlash
  };

  const handleTelegramClick = () => {
    const telegramLink = "https://t.me/abdusalimov_shoxjaxon";
    window.open(telegramLink, "_blank");
  };

  return (
    <nav className="navbar">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <NavLink to="/" className="navbar_logo_link">
            <img src={logo} alt="" className="navbar_img" />
          </NavLink>
          <div className="link">
            <NavLink
              to="https://t.me/My_VALLEY"
              target="_blank"
              className="link-btn one">
              <img src={telegram} alt="telegram" width="20" height="20" />
              <span className="link-text">{t("telegram")}</span>
            </NavLink>

            {/* Fayl yuklash */}
            <a href={downloadFile} download className="link-btn two">
              <img src={downloadFile} alt="download" width="20" height="20" />
              <span className="link-text">{t("download")}</span>
            </a>

            {/* mailto orqali ariza yuborish */}
            <a onClick={handleTelegramClick} className="link-btn three">
              <img src={ariza} alt="ariza" width="20" height="20" />
              <span className="link-text">{t("apply")}</span>
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
