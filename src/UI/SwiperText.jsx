import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/introtexts.scss";
import axios from "axios"; // Axiosni import qilish
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next"; // i18next dan foydalanish

export default function App() {
  const { t } = useTranslation(); // faqat tilni olish

  const BOT_TOKEN = "YOUR_BOT_TOKEN"; // O'z bot tokeningizni shu yerga kiriting
  const CHAT_ID = "YOUR_CHAT_ID"; // O'z chat ID'ingizni shu yerga kiriting
  const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`; // Telegram API URL

  const [showForm, setShowForm] = useState(false); // Formani ko'rsatish uchun
  const [formData, setFormData] = useState({
    name: "",
    emailOrTelegram: "",
    phone: "",
    company: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const message = `Ism: ${formData.name}\nEmail yoki Telegram: ${formData.emailOrTelegram}\nTelefon: ${formData.phone}\nKompaniya: ${formData.company}`;
      await axios.post(API_URL, {
        chat_id: CHAT_ID,
        text: message,
      });

      toast.success(t("successMessage")); // Success message i18n dan olasiz
      setShowForm(false);
      setFormData({ name: "", emailOrTelegram: "", phone: "", company: "" });
    } catch (error) {
      console.error("Xato:", error);
      alert(t("errorMessage")); // Error message i18n dan olasiz
    }
  };

  return (
    <div className="intro_texts">
      <Swiper className="mySwiper2">
        <SwiperSlide className="swiper-slide-texts">
          <div className="intro_card">
            <h4 className="intro_text">{t("service_intro")}</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-texts">
          <div className="intro_card">
            <h4 className="intro_text">{t("result_intro")}</h4>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="intro_btn_card">
        <button className="intro_btn" onClick={() => setShowForm(true)}>
          {t("consultation_button")}
        </button>
      </div>
      {showForm && (
        <div className="form-overlay" onClick={() => setShowForm(false)}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowForm(false)}>
              X
            </button>
            <h2 className="mijoz_bolish">{t("become_customer")}</h2>
            <form onSubmit={handleSubmit}>
              <label className="intro_label">{t("name_label")}</label>
              <input
                type="text"
                name="name"
                placeholder={t("name_placeholder")}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label className="intro_label">
                {t("email_or_telegram_label")}
              </label>
              <input
                type="text"
                name="emailOrTelegram"
                placeholder={t("email_or_telegram_placeholder")}
                value={formData.emailOrTelegram}
                onChange={handleInputChange}
                required
              />
              <label className="intro_label">{t("phone_label")}</label>
              <input
                type="text"
                name="phone"
                placeholder={t("phone_placeholder")}
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <label className="intro_label">{t("company_label")}</label>
              <input
                type="text"
                name="company"
                placeholder={t("company_placeholder")}
                value={formData.company}
                onChange={handleInputChange}
                required
              />
              <button id="yuborish" className="video_btn" type="submit">
                {t("send_button")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
