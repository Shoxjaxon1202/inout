import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import StarIcon from "@mui/icons-material/Star";
import "../styles/comments.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import qiz1 from "../assets/img/qizlar1.jpg";
import qiz2 from "../assets/img/qizlar2.jpg";
import qiz3 from "../assets/img/qizlar3.png";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next"; // Import useTranslation

const initialCommentsData = [
  {
    id: 1,
    name: "Pem",
    date: "12.09.2023 05:14",
    comment: "nhnh",
    rating: 3,
    avatar: qiz1,
  },
  {
    id: 2,
    name: "Alisa",
    date: "12.09.2023 13:05",
    comment: "Foydali xizmatlaringiz uchun rahmat",
    rating: 5,
    avatar: qiz2,
  },
  {
    id: 3,
    name: "Mira",
    comment: "A'lo darajadagi xizmat uchun rahmat",
    rating: 4,
    avatar: qiz3,
  },
];

const Comments = () => {
  const { t } = useTranslation(); // useTranslation yordamida t funksiyasini oling
  const [commentsData, setCommentsData] = useState(initialCommentsData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newComment, setNewComment] = useState({
    name: "",
    comment: "",
    rating: 0,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setNewComment({ ...newComment, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommentData = {
      ...newComment,
      id: commentsData.length + 1,
      date: new Date().toLocaleString(),
      avatar: qiz1,
    };
    setCommentsData([...commentsData, newCommentData]);
    setNewComment({ name: "", comment: "", rating: 0 });
    closeModal();
    toast.success(t("comments.success_message")); // translate success message
  };

  return (
    <div className="comments" id="reviews">
      <div className="comments_container">
        <div className="comments__flex">
          <h2 className="comments__title">
            <span className="comments__title--highlight">
              {t("comments.title")}
            </span>{" "}
            {t("comments.about_us")}
          </h2>

          <button onClick={openModal} className="video_btn">
            <EditNoteIcon />
            {t("comments.write_review")}
          </button>
        </div>
        <Slider {...settings}>
          {commentsData.map((comment) => (
            <div key={comment.id} className="comments__item">
              <div className="comments__header">
                <img
                  src={comment.avatar}
                  alt={comment.name}
                  className="comments__avatar"
                />
                <div className="comments__info">
                  <h3 className="comments__name">{comment.name}</h3>
                  <p className="comments__date">{comment.date}</p>
                </div>
              </div>
              <p className="comments__text">{comment.comment}</p>
              <div className="comments__rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon
                    key={index}
                    style={{
                      color: index < comment.rating ? "#00c3ff" : "#ccc",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </Slider>

        {isModalOpen && (
          <div className="comments__modal">
            <div className="comments__modal-content">
              <button className="comments__modal-close" onClick={closeModal}>
                &times;
              </button>
              <h2>{t("comments.modal_title")}</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  {t("comments.name_label")}
                  <input
                    type="text"
                    name="name"
                    value={newComment.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  {t("comments.rating_label")}
                  <div className="comments__rating-input">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon
                        key={index}
                        style={{
                          color: index < newComment.rating ? "#00c3ff" : "#ccc",
                          cursor: "pointer",
                        }}
                        onClick={() => handleRatingChange(index + 1)}
                      />
                    ))}
                  </div>
                </label>
                <label>
                  {t("comments.comment_label")}
                  <textarea
                    name="comment"
                    value={newComment.comment}
                    onChange={handleInputChange}
                    required></textarea>
                </label>
                <button type="submit">{t("comments.submit_button")}</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
