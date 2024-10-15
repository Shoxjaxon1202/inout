import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "../styles/counts.scss";
import raketa from "../assets/img/raketa.png";

const CountCard = ({ maxCount, text }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  useEffect(() => {
    if (inView) {
      let duration = 2000;
      let increment = maxCount / (duration / 50);
      let interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < maxCount) {
            return Math.min(prevCount + increment, maxCount);
          } else {
            clearInterval(interval);
            return maxCount;
          }
        });
      }, 50);

      return () => clearInterval(interval);
    } else {
      setCount(0);
    }
  }, [inView, maxCount]);

  const formattedCount = new Intl.NumberFormat().format(Math.floor(count));

  return (
    <div className="counts_card" ref={ref}>
      <h2 className="counts_subtitle">
        {formattedCount} <span className="counts_span">+</span>
      </h2>
      <p className="counts_text">{text}</p>
    </div>
  );
};

const Counts = () => {
  const { t } = useTranslation();

  return (
    <div className="counts">
      <div className="counts_wrapper">
        <h4
          className="counts_title"
          dangerouslySetInnerHTML={{ __html: t("headerTitle") }}
        />
        <div className="counts_cards">
          <CountCard maxCount={20} text={t("employeeCount")} />
          <CountCard maxCount={1672} text={t("campaignCount")} />
          <CountCard maxCount={1660} text={t("successCaseCount")} />
          <img src={raketa} alt="" className="counts_img" />
        </div>
      </div>
    </div>
  );
};

export default Counts;
