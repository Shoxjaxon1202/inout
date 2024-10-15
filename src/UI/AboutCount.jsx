import React from "react";
import "../styles/aboutcount.scss";
import rasm from "../assets/img/about.png";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
    <div className="card" ref={ref}>
      <h3>
        {formattedCount} <span className="place_span">+</span>
      </h3>
      <p>{text}</p>
    </div>
  );
};

const AboutCount = () => {
  const { t } = useTranslation(); // Tarjima hook

  return (
    <div className="statistics-container">
      <div className="statistics-wrapper">
        <div className="logo-container">
          <img src={rasm} alt="" />
        </div>
        <div className="statistics-bottom">
          <div className="statistics-header">
            <h1>
              {t("statistics.header")}{" "}
              <span className="place_span">{t("statistics.about")}</span>
            </h1>
            <NavLink to={"/about"}>
              <button className="contact-page__submit btn">
                {t("statistics.more_info")}
              </button>
            </NavLink>
          </div>
          <div className="statistics-cards">
            <CountCard maxCount={3} text={t("statistics.year_success")} />
            <CountCard maxCount={24} text={t("statistics.employees")} />
            <CountCard
              maxCount={53}
              text={t("statistics.communities_promoted")}
            />
            <CountCard
              maxCount={336}
              text={t("statistics.websites_launched")}
            />
            <CountCard
              maxCount={138}
              text={t("statistics.communities_promoted")}
            />
            <CountCard
              maxCount={218}
              text={t("statistics.products_on_grafana")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCount;
