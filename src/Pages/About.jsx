import React from "react";
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
const About = () => {
  return (
    <div className="about">
      <div className="about_wrapper">
        <div className="about_left">
          <ArrowBackIcon />
          <button className="about_btn">
            <a href="/">Orqaga</a>
          </button>
        </div>
        <div className="about_center">
          <img src={logo} alt="" className="about_img" />
          <div className="about_card">
            <h3 className="about_title">
              Biz <span className="place_span">haqimizda</span>
            </h3>

            <p className="about_text">
              InOut reklama joylashtirish xizmatlarining keng assortimentini
              taklif etadi, eng ko'p talab qilinadigani Toshkentdagi tashqi
              reklamadir. Siz buyurtma berishingiz va reklamalarni{" "}
              <span className="about_span">LED</span>
              ekranlarga, shuningdek, laytboks va bannerlarga joylashtirishingiz
              mumkin. Reklama imkon qadar tezroq, kafolatli va hamyonbop narxda
              amalga oshiriladi. ANIQ FOYDA{" "}
            </p>
            <p className="about_text">
              <span className="about_span">Tashqi reklama</span>
              maqsadli auditoriyani kerakli ma'lumotlar bilan ta'minlashning
              arzon va juda samarali usulidir. Dastlabki ma'lumotlarni taqdim
              etish uchun tashrif qog'ozidan foydalanish maqsadli
              auditoriyangizning e'tiborini jalb qilish imkonini beradi.
              <span className="about_span">LED ekranlardan</span>tashqi reklama
              sifatida foydalanish eng istiqbolli formatlardan biri bo'lib, ayni
              paytda o'z tovarlarini (xizmatlarini) reklama qiluvchi kompaniya
              yoki tashkilotning yuqori maqomini ko'rsatadi.
            </p>
          </div>
          <div className="about_statistika">
            <h3 className="about_title">
              Bizning <span className="place_span">qisqa statistika</span>
            </h3>
            <div className="about_boxs">
              <div className="about_box">
                <h2 className="about_box_title">
                  3 <span className="place_span">+</span>{" "}
                </h2>
                <p className="about_subtext">Muvaffaqiyatli jamoaviy ish</p>
              </div>
              <div className="about_box">
                <h2 className="about_box_title">24</h2>
                <p className="about_subtext">Bizning kompaniyamizda ishlash</p>
              </div>
              <div className="about_box">
                <h2 className="about_box_title">138</h2>
                <p className="about_subtext">
                  Ijtimoiy tarmoqlarda targ'ib qilingan
                </p>
              </div>
              <div className="about_box">
                <h2 className="about_box_title">336</h2>
                <p className="about_subtext">
                  Ishlab chiqilgan va ishga tushirilgan
                </p>
              </div>
              <div className="about_box">
                <h2 className="about_box_title">53</h2>
                <p className="about_subtext">
                  Ijtimoiy tarmoqlarda targ'ib qilingan
                </p>
              </div>
              <div className="about_box">
                <h2 className="about_box_title">218</h2>
                <p className="about_subtext">grafanadagi mahsulotlar</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about_right">
          <div className="footer__info-item">
            <p>Bizning ijtimoiy tarmoqlarimiz</p>
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
  );
};

export default About;
