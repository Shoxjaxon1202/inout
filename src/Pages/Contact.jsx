import React, { useState } from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contact.scss";
import admin from "../assets/img/contactOpa.png";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(); // useTranslation hook

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const settingName = (e) => {
    setName(e.target.value);
  };

  const settingEmail = (e) => {
    setEmail(e.target.value);
  };

  const settingNumber = (e) => {
    setNumber(e.target.value);
  };

  const settingText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email.trim().length &&
      number.trim().length &&
      text.trim().length &&
      name.trim().length
    ) {
      const token = `YOUR_TELEGRAM_BOT_TOKEN`;
      const chat_id = YOUR_CHAT_ID;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      axios({
        url: url,
        method: "post",
        data: {
          chat_id: chat_id,
          text:
            "Name: " +
            name +
            ", Email: " +
            email +
            ", Raqam: " +
            number +
            ", Xabar: " +
            text,
        },
      })
        .then((data) => {
          toast.success(t("contact_success"), {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        })
        .catch((error) => {
          toast.error(t("contact_error"), {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        });

      e.target.reset();
    } else {
      toast.warning(t("contact_warning"));
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <div className="contact-page__form-container">
          <form className="contact-page__form" onSubmit={handleSubmit}>
            <h2 className="contact-page__title">{t("contact_title")}</h2>
            <div className="contact-page__form-group">
              <label htmlFor="name">{t("contact_name")}</label>
              <input
                type="text"
                id="name"
                required
                name="name"
                onChange={settingName}
              />
            </div>
            <div className="contact-page__form-group">
              <label htmlFor="emailOrTelegram">{t("contact_email")}</label>
              <input
                type="text"
                id="emailOrTelegram"
                required
                onChange={settingEmail}
                name="email"
              />
            </div>
            <div className="contact-page__form-group">
              <label htmlFor="phone">{t("contact_phone")}</label>
              <input
                type="number"
                id="phone"
                required
                name="number"
                onChange={settingNumber}
              />
            </div>
            <div className="contact-page__form-group">
              <label htmlFor="message">{t("contact_message")}</label>
              <textarea
                id="message"
                required
                name="text"
                onChange={settingText}></textarea>
            </div>
            <button type="submit" className="btn contact-page__submit">
              {t("contact_submit")}
            </button>
          </form>
        </div>
        <div className="contact-page__image">
          <img src={admin} alt="Customer Service" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
