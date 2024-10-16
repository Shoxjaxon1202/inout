import React from "react";
import { useTranslation } from "react-i18next"; // useTranslation import qilish
import "../styles/vakansiya.scss";

const Vakansiya = () => {
  const { t } = useTranslation(); // useTranslation hookini chaqirish

  return (
    <div className="vakansiya">
      <div className="vakansiya_wrapper">
        <h3 className="vakansiya_title">{t("vakansiya_title")}</h3>
        <div className="vakansiya_cards">
          <div className="vakansiya_card">
            <h4 className="vakansiya_subtitle">{t("vakansiya_operator")}</h4>
            <h5 className="vakansiya_text">{t("vakansiya_skills")}</h5>
            <p className="vakansiya_subtext">
              <span className="vakansiya_span">✓ </span>
              {t("vakansiya_education")}
            </p>
            <a href="https:hh.uz" target="_blank" >
              <button className="video_btn">{t("vakansiya_more")}</button>
            </a>
          </div>
          <div className="vakansiya_card">
            <h4 className="vakansiya_subtitle">{t("vakansiya_webDesigner")}</h4>
            <h5 className="vakansiya_text">{t("vakansiya_skills")}</h5>
            <p className="vakansiya_subtext">
              <span className="vakansiya_span">✓ </span>
              {t("vakansiya_experience")}
            </p>
            <a href="https:ishkop.uz" target="_blank" >
              <button className="video_btn">{t("vakansiya_more")}</button>
            </a>
          </div>
          <div className="vakansiya_card">
            <h4 className="vakansiya_subtitle">{t("vakansiya_logistician")}</h4>
            <h5 className="vakansiya_text">{t("vakansiya_skills")}</h5>
            <p className="vakansiya_subtext">
              <span className="vakansiya_span">✓ </span>dddddd
            </p>
            <a href="https:olx.uz" target="_blank" >
              <button className="video_btn">{t("vakansiya_more")}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vakansiya;
