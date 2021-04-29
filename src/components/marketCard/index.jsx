import React from "react";
import Button from "../button";
import "./marketCard.css";

const MarketCard = ({ art }) => {
  return (
    <div className="card market-card">
      <h2 className="card-title">{art.name}</h2>
      <img className="card-image" src={art.image} alt="" />
      <span className="card-price">R$ {art.price}</span>
      <span className="">Artista</span>
      <a className="card-artist-name" href="#">
        {art.artist}
      </a>
      <Button text={"Comprar"} link={`buy/${art.name}`} />
    </div>
  );
};

export default MarketCard;
