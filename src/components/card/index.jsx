import React from "react";
import { USERPROFILE } from "../../shared/imgLinks";
import "./card.css";

const Card = ({ cardTitle, recentActionText, value1, value2, value3 }) => {
  return (
    <div className="container-custom recent-action-card-container">
      <div className="recent-action-card-title-wrapper">
        <h1 className="recent-action-card-title">{cardTitle}</h1>
        <span>{recentActionText}</span>
      </div>
      <div>
        <div className="recent-action-card-row">
          <img
            className="recent-action-card-profile"
            src={USERPROFILE}
            alt=""
          />
          <div className="recent-action-user-value-wrapper">
            <a href="/">@User</a>
            <span>{value1}</span>
          </div>
        </div>
        <div className="recent-action-card-row">
          <img
            className="recent-action-card-profile"
            src={USERPROFILE}
            alt=""
          />
          <div className="recent-action-user-value-wrapper">
            <a href="/">@User</a>
            <span>{value2}</span>
          </div>
        </div>
        <div className="recent-action-card-row">
          <img
            className="recent-action-card-profile"
            src={USERPROFILE}
            alt=""
          />
          <div className="recent-action-user-value-wrapper">
            <a href="/">@User</a>
            <span>{value3}</span>
          </div>
        </div>
      </div>
      <a className="recent-action-link" href="/">
        Ver mais
      </a>
    </div>
  );
};

export default Card;
