import React from "react";
import { USERPROFILE } from "../../shared/imgLinks";

import "./activityCard.css";

const ActivityCard = ({ text, img }) => {
  return (
    <>
      <div className="activity-page-card-container">
        <div className="activity-page-wrapper">
          <div className="activity-user-wrapper">
            <img className="activity-page-profile" src={USERPROFILE} alt="" />
            <span>
              <a href="#">@User</a> {text}
            </span>
          </div>
          <img className="activity-page-artwork" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
