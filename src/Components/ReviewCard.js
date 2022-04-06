import React from "react";
import classes from "./ReviewCard.module.css";
import revImage from '../assest/images/testimonial-icon.png'
const ReviewCard = (props) => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
      <div
        className={`${classes["team-item"]}`}
        data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
      >
        <div className={`${classes["team-content"]}`}>
          <i>
            <img src={revImage} alt="" />
          </i>
          <div className={`${classes["team-info"]}`}>
            <h3 className={`${classes["user-name"]}`}>{props.name}</h3>
          </div>
          {props.desc}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
