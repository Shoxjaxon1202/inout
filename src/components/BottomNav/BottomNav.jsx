import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import "./bottomNav.scss";
import { NavLink } from "react-router-dom";

import search from "../../assets/img/search.svg";
import time from "../../assets/img/time.svg";
import tel from "../../assets/img/tel.svg";
import sun from "../../assets/img/sunIcon.png";
import like from "../../assets/img/likeIcon.svg";

const BottomNav = () => {
  const inputEl = useRef(null);
  let typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Avtobuslarda reklama",
        "LED ekranlarda reklama",
        "Bilboardlarda reklama",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    };

    typed.current = new Typed(inputEl.current, options);

    return () => {
      typed.current.destroy(); // Component unmounted bo'lganda o'chirish
    };
  }, []);

  return (
    <div className="bottomnav">
      <div className="bottomnav_wrapper">
        <div className="bottomnav_left">
          <ul className="bottomnav_list">
            <li className="bottomnav_item">
              <NavLink to={"/home"}>Asosiy</NavLink>
            </li>
            <li className="bottomnav_item">
              <NavLink to={"/services"}>Xizmatlar</NavLink>
            </li>
            <li id="biz" className="bottomnav_item">
              <NavLink to={"/about"}>
                <span>Biz</span>
                <span>haqimizda</span>
              </NavLink>
            </li>
            <li className="bottomnav_item">
              <NavLink to={"/contact"}>Kontakt</NavLink>
            </li>
            <li className="bottomnav_item">
              <NavLink to={"/vakansiya"}>Vakansiya</NavLink>
            </li>
            <li className="bottomnav_item">
              <a href="#reviews">Sharhlar</a>
            </li>
          </ul>
          <form className="bottomnav_form">
            <img src={search} alt="" className="bottomnav_form_img" />
            <input
              type="text"
              className="bottomnav_input"
              ref={inputEl}
              placeholder="Bu yerda reklama turi..."
            />
          </form>
        </div>
        <div className="bottomnav_right">
          <div className="bottomnav_contact">
            <div className="bottomnav_card">
              <img src={time} alt="" className="bottomnav_icon" />
              <h4 className="bottomnav_title">9:00-17:00 du-ju</h4>
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
            <img src={like} alt="" className="bottomnav_mode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
