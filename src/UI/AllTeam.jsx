import React, { useState } from "react";
// import "../Components/Team/team.scss";
import "../styles/allteam.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import qiz1 from "../assets/img/qizlar1.jpg";
import qiz2 from "../assets/img/qizlar2.jpg";
import qiz3 from "../assets/img/qizlar3.png";
import qiz4 from "../assets/img/qizlar4.png";
import qiz5 from "../assets/img/qizlar5.png";
import qiz6 from "../assets/img/qizlar6.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";

const Allteam = () => {
  const [zoomedIndex, setZoomedIndex] = useState(null); // Zoomlangan rasm uchun state

  const teamMembers = [
    {
      name: "Alisa",
      position: "Dizayner",
      image: qiz1,
      instagram: "#",
      telegram: "#",
      phone: "#",
    },
    {
      name: "Mira",
      position: "Android Dasturchi",
      image: qiz2,
      instagram: "#",
      telegram: "#",
      phone: "#",
    },
    {
      name: "Lisa",
      position: "Secretar",
      image: qiz3,
      instagram: "#",
      telegram: "#",
      phone: "#",
    },
    {
      name: "Pem",
      position: "Maxsulot Manageri",
      image: qiz4,
      instagram: "#",
      telegram: "#",
      phone: "#",
    },
    {
      name: "Nasha",
      position: "Bloger",
      image: qiz5,
      instagram: "#",
      telegram: "#",
      phone: "#",
    },
    {
      name: "Feruza",
      position: "Savdo bo'limi boshlig'i",
      image: qiz6,
      instagram: "#",
      telegram: "#",
      phone: "#",
    },
  ];

  const handleZoomToggle = (index) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null); // Agar zoomlangan bo'lsa, kichraytirish
    } else {
      setZoomedIndex(index); // Aks holda, zoom qilish
    }
  };
  return (
    <div className="team-slider" id="allteam">
      <div className="container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team_member">
            <div
              className={`team-slider__image ${
                zoomedIndex === index ? "zoomed" : ""
              }`}>
              <img src={member.image} alt={member.name} />
              <div
                className="zoom-icon"
                onClick={() => handleZoomToggle(index)}>
                <ZoomInIcon /> {/* Zoom icon */}
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <div className="social-links">
              <a href={member.instagram}>
                <InstagramIcon style={{ fontSize: 30 }} />
              </a>
              <a href={member.telegram}>
                <TelegramIcon style={{ fontSize: 30 }} />
              </a>
              <a href={member.phone}>
                <PhoneIcon style={{ fontSize: 30 }} />
              </a>
            </div>
            <button className="rate-button btn1">Baholash</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allteam;
