import React from "react";
import { useTranslation } from "react-i18next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import discord from "../assets/img/discord.png";
import Telegram from "../assets/img/telegramrasm.png";
import WhatsApp from "../assets/img/whatsapp.png";
import YouTube from "../assets/img/youtube.png";
import Instagram from "../assets/img/instagram.png";
import Facebook from "../assets/img/facebook.png";
import vk from "../assets/img/vk.png";
import logo from "../assets/img/about.png";
import "../styles/about.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CountCard = ({ maxCount, text }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.05, // 5% dan kam ko'rinishi kerak
  });

  useEffect(() => {
    if (inView) {
      let duration = 2000; // 2 soniya
      let increment = maxCount / (duration / 50); // Sonning kattaligiga qarab tezlik
      let interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < maxCount) {
            return Math.min(prevCount + increment, maxCount);
          } else {
            clearInterval(interval);
            return maxCount;
          }
        });
      }, 50); // 50ms tezlik bilan sanaydi

      return () => clearInterval(interval); // Oldingi intervalni to'xtatadi
    } else {
      setCount(0);
    }
  }, [inView, maxCount]);

  const formattedCount = new Intl.NumberFormat().format(Math.floor(count));

  return (
    <div className="about_box" ref={ref}>
      <h2 className="about_box_title">
        {formattedCount} <span className="place_span">+</span>
      </h2>
      <p className="about_subtext">{text}</p>
    </div>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about_wrapper">
        <NavLink className={"about_left"} to={"/"}>
          <div className="about_left_display">
            <ArrowBackIcon />
            <button className="about_btn">{t("about.back")}</button>
          </div>
        </NavLink>
        <div className="about_center">
          <img src={logo} alt="" className="about_img" />
          <div className="about_card">
            <h3 className="about_title">{t("about.title")}</h3>
            <p className="about_text">{t("about.text1")}</p>
            <p className="about_text">{t("about.text2")}</p>
          </div>
          <div className="about_statistika">
            <h3 className="about_title">{t("about.title")}</h3>
            <div className="about_boxs">
              <CountCard maxCount={3} text={t("about.statistics.success")} />
              <CountCard maxCount={24} text={t("about.statistics.employees")} />
              <CountCard
                maxCount={138}
                text={t("about.statistics.socialsPromoted")}
              />
              <CountCard
                maxCount={336}
                text={t("about.statistics.developedLaunched")}
              />
              <CountCard
                maxCount={53}
                text={t("about.statistics.socialsPromoted")}
              />
              <CountCard maxCount={218} text={t("about.statistics.products")} />
            </div>
          </div>
        </div>
        <div className="about_right">
          <div className="footer__info-item">
            <p>{t("social_media")}</p>
            <div className="footer__socials">
              <a href="https://www.instagram.com/" target="_blank">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://telegram.org/" target="_blank">
                <img src={Telegram} alt="Telegram" />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img src={YouTube} alt="YouTube" />
              </a>
              <a href="https://discord.com/" target="_blank">
                <img src={discord} alt="Discord" />
              </a>
              <a href="https://vk.com/" target="_blank">
                <img src={vk} alt="VK" />
              </a>
              <a href="https://www.whatsapp.com/" target="_blank">
                <img src={WhatsApp} alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
