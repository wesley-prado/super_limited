import React from "react";
import Button from "../button";
import "./info-container.css";

const InfoContainer = ({
  mainTitle,
  title1,
  title2,
  title3,
  text1,
  text2,
  text3,
  buttonText,
  link,
}) => {
  return (
    <>
      <div className="container-custom info">
        <div className="container-inside-above">
          <h2 className="block block-title">{mainTitle}</h2>
          <div className="block">
            <h6>{title1}</h6>
            <p>{text1}</p>
          </div>

          <div className="block">
            <h6>{title2}</h6>
            <p>{text2}</p>
          </div>

          <div className="block">
            <h6>{title3}</h6>
            <p>{text3}</p>
          </div>
        </div>

        <div className="container-inside-below">
          <Button text={buttonText} link={link} />
        </div>
      </div>
    </>
  );
};

export default InfoContainer;
