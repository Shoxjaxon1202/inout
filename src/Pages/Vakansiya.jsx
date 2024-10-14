import React from "react";

import "../styles/vakansiya.scss";

const Vakansiya = () => {
  return (
    <div className="vakansiya">
      <div className="vakansiya_wrapper">
        <h3 className="vakansiya_title">Ish Joylari</h3>
        <div className="vakansiya_cards">
          <div className="vakansiya_card">
            <h4 className="vakansiya_subtitle">
              qo'ng'iroqlar markazi operatori
            </h4>
            <h5 className="vakansiya_text">Kerakli ko'nikmalar</h5>
            <p className="vakansiya_subtext">
              <span className="vakansiya_span">✓ </span>Ma'lumoti: o'rta maxsus;
            </p>
            <button className="video_btn">Ko'proq</button>
          </div>
          <div className="vakansiya_card">
            <h4 className="vakansiya_subtitle">Web dizayner</h4>
            <h5 className="vakansiya_text">Kerakli ko'nikmalar</h5>
            <p className="vakansiya_subtext">
              <span className="vakansiya_span">✓ </span>3 yillik tajriba
            </p>
            <button className="video_btn">Ko'proq</button>
          </div>
          <div className="vakansiya_card">
            <h4 className="vakansiya_subtitle">Logist</h4>
            <h5 className="vakansiya_text">Kerakli ko'nikmalar</h5>
            <p className="vakansiya_subtext">
              <span className="vakansiya_span">✓ </span>dddddd
            </p>
            <button className="video_btn">Ko'proq</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vakansiya;
