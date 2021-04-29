import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ text, link }) => {
  return (
    <>
      <Link className="btn-custom" to={`/${link}`}>
        {text}
      </Link>
    </>
  );
};

export default Button;
