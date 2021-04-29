import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import Button from "../../components/button";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container intro-container">
          <span className="hero-left">Adquira</span>
          <div className="hero-right">
            <span className="title-hero">Artes Digitais</span>
            <span>Super Exclusivas</span>
            <div className="hero-links">
              <Button text={"Adquira agora"} link={"market"} />
              <div className="hero-faq">
                <Link className="hero-faq-link" to="/faq">
                  Saber mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
