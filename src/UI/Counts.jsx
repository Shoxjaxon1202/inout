import React from "react";

import "../styles/counts.scss";

import raketa from "../assets/img/raketa.png";
const Counts = () => {
  return (
    <div className="counts">
      <div className="counts_wrapper">
        <h4 className="counts_title">
          Bizda <span className="counts_span">raqamlar mavjud</span>
        </h4>
        <div className="counts_cards">
          <div className="counts_card">
            <h2 className="counts_subtitle">
              20 <span className="counts_span">+</span>
            </h2>
            <p className="counts_text">Xodimlar soni</p>
          </div>
          <div className="counts_card">
            <h2 className="counts_subtitle">
              1,672 <span className="counts_span">+</span>
            </h2>
            <p className="counts_text">reklama kampaniyalarini boshladi</p>
          </div>
          <div className="counts_card">
            <h2 className="counts_subtitle">
              1,660
              <span className="counts_span">+</span>
            </h2>
            <p className="counts_text">muvaffaqiyatli holatlar</p>
          </div>
          <img src={raketa} alt="" className="counts_img" />
        </div>
      </div>
    </div>
  );
};

export default Counts;
