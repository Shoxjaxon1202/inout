import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // i18next dan foydalanish

import "../styles/likes.scss";

const Likes = () => {
  const { t, i18n } = useTranslation(); // tilni olish va o'zgartirish

  // Foydalanuvchining oxirgi tanlangan tilini localStorage dan olish
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className="likes">
      <h2 className="smile">¯\_(ツ)_/¯</h2>
      <h2 className="likes_title">{t("noDataMessage")}</h2>{" "}
      {/* Tarjima qilingan matn */}
    </div>
  );
};

export default Likes;
