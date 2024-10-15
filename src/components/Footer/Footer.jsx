import React from "react";
import "../../styles/footer.scss";
import { AccessTime, LocationOn, Email } from "@mui/icons-material";
import { useTranslation } from "react-i18next"; // i18n kutubxonasini import qilish

import discord from "../../assets/img/discord.png";
import Telegram from "../../assets/img/telegramrasm.png";
import WhatsApp from "../../assets/img/whatsapp.png";
import YouTube from "../../assets/img/youtube.png";
import Instagram from "../../assets/img/instagram.png";
import Facebook from "../../assets/img/facebook.png";
import vk from "../../assets/img/vk.png";
import logo from "../../assets/img/footer.png";

import { NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation(); // i18n funksiyasini olish

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__flex">
          <div className="footer__top">
            <NavLink className="footer__logo" to={"/"}>
              <img src={logo} alt="Logo" className="footer__logo-img" />
            </NavLink>
            <div className="footer__info">
              <div className="footer__info-item">
                <AccessTime className="footer__info-icon" />
                <p>
                  {t("time")} <br /> du-ju
                </p>
              </div>
              <div className="footer__info-item">
                <a
                  href="https://maps.google.com/?q=42.606544,61.757882"
                  target="_blank"
                  rel="noopener noreferrer">
                  <LocationOn className="footer__info-icon" />
                  <p>{t("location")}</p>
                </a>
              </div>
              <div className="footer__info-item">
                <Email className="footer__info-icon" />
                <p>
                  <a href="mailto:info@inoutgroup.uz">info@inoutgroup.uz</a>{" "}
                  <br />
                  <a href="mailto:inoutadsagency@gmail.com">
                    inoutadsagency@gmail.com
                  </a>
                </p>
              </div>
              <div className="footer__info-item">
                <p>{t("social_media")}</p>
                <div className="footer__socials">
                  <a
                    href="https://t.me/yourtelegramchannel"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={Telegram} alt="Telegram" />
                  </a>
                  <a
                    href="https://wa.me/yourwhatsappnumber"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={WhatsApp} alt="WhatsApp" />
                  </a>
                  <a
                    href="https://www.facebook.com/yourfacebookpage"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/yourinstagram"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                  <a
                    href="https://www.youtube.com/?hl=ru"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={YouTube} alt="YouTube" />
                  </a>
                  <a
                    href="https://discord.com/invite/yourdiscord"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={discord} alt="Discord" />
                  </a>
                  <a
                    href="https://vk.com/yourvk"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={vk} alt="VK" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <NavLink to={"/"}>
            <img src={logo} alt="Logo" className="footer__logo-img1" />
          </NavLink>
          <p>{t("team_name")}</p>
          <p>
            {t("copyright")} © {new Date().getFullYear()}{" "}
            {t("all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
