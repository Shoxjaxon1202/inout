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
            <h3 className="about_title">{t("about.statistics.title")}</h3>
            <div className="about_boxs">
              <div className="about_box">
                <h2 className="about_box_title">
                  3 <span className="place_span">+</span>{" "}
                </h2>
                <p className="about_subtext">{t("about.statistics.success")}</p>
              </div>
              <div className="about_box">
                <h2 className="about_box_title">24</h2>
                <p className="about_subtext">
                  {t("about.statistics.employees")}
                </p>
              </div>
              <div className="about_box">
                <h2 className="about_box_title">138</h2>
                <p className="about_subtext">
                  {t("about.statistics.socialsPromoted")}
                </p>
              </div>
              <div className="about_box">
                <h2 className="about_box_title">336</h2>
                <p className="about_subtext">
                  {t("about.statistics.developedLaunched")}
                </p>
              </div>
              <div className="about_box">
                <h2 className="about_box_title">53</h2>
                <p className="about_subtext">
                  {t("about.statistics.socialsPromoted")}
                </p>
              </div>
              <div className="about_box">
                <h2 className="about_box_title">218</h2>
                <p className="about_subtext">
                  {t("about.statistics.products")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about_right">
          <div className="footer__info-item">
            <p>{t("about.contacts")}</p>
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
