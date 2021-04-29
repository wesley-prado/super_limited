import React from "react";
import Button from "../../components/button";
import { GIRL, USERPROFILE } from "../../shared/imgLinks";
import Header from "../../components/header";
import icon from "./img/view.png";

import "./buy.css";

const Buy = () => {
  return (
    <>
      <Header />
      <div className="container-custom buy-page-container">
        <div className="buy-page-info">
          <h3>Girl</h3>
          <h5>Edição 1/1 única, não replicável. Coleção Wizardry.</h5>
          <p className="artwork-description">
            Exclusivo para as coleções de luxo da Hooman.
          </p>
          <span className="buy-offer">Preço R$ 3000</span>
          <button class="buy-btn">Comprar</button>
        </div>
        <img className="buy-page-artwork" src={GIRL} alt="GIRL" />
        <aside>
          <div className="owner-artist-row">
            <img className="buy-page-profile" src={USERPROFILE} alt="" />
            <div className="owner-artist-wrapper">
              <a href="#">@User</a>
              <span>Artista</span>
            </div>
          </div>
          <div className="owner-artist-row">
            <img className="buy-page-profile" src={USERPROFILE} alt="" />
            <div className="owner-artist-wrapper">
              <a href="#">@User</a>
              <span>Dono</span>
            </div>
          </div>
          <div className="icon-wrapper">
            <img className="icon" src={icon} alt="" />
            <span>23283 visualizações</span>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Buy;
