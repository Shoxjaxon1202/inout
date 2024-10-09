import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import lang1 from "../../assets/img/langUzb.png";
import lang2 from "../../assets/img/langEng.png";
import lang3 from "../../assets/img/langRus.png";

import "./navbar.scss";
const Navbar = () => {
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
          <div className="navbar_links">
            <NavLink>
              <div className="navbar_link" onClick={handleTelegramClick}>
                <i className="navbar_icon fa-brands fa-telegram"></i>
                <button className="navbar_btn">Telegram</button>
              </div>
            </NavLink>
            <NavLink href="example.pdf" download>
              <div className="navbar_link">
                <i class="fa-solid fa-download"></i>
                <button className="navbar_btn">Taqdimot(35)</button>
              </div>
            </NavLink>
            <NavLink>
              <div className="navbar_link">
                <i class="fa-regular fa-comment-dots"></i>
                <button className="navbar_btn">Arizangizni yuboring</button>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="navbar_right">
          <div className="navbar_lang">
            <img src={lang1} alt="" className="navbar_langImg" />
            <h4 className="navbar_langText">Uz</h4>
          </div>
          <div className="navbar_lang">
            <img src={lang2} alt="" className="navbar_langImg" />
            <h4 className="navbar_langText">En</h4>
          </div>
          <div className="navbar_lang">
            <img src={lang3} alt="" className="navbar_langImg" />
            <h4 className="navbar_langText">Ru</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
