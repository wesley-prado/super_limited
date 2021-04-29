import React, { useState, useEffect } from "react";
import {
  CRYPTO,
  GIRL,
  GOLDENBOY,
  SKULL,
  OVERABSTRACT,
  GUMBO,
  MUGSHOT,
  MONETSKULL,
  ELONMUSK,
} from "../../shared/imgLinks";

import MarketCard from "../../components/marketCard";
import Header from "../../components/header";

import "./market.css";

const Market = () => {
  const arts = [
    {
      id: "63ac4acc-e81b-4afe-b4fb-3947c67ef977",
      name: "girl",
      price: 3000,
      image: GIRL,
      artist: "user",
    },
    {
      id: "f538d32f-a17c-4ad1-91b2-c502221c89bc",
      name: "BTCBOY",
      price: 19000,
      image: GOLDENBOY,
      artist: "user",
    },
    {
      id: "a8a119f6-ad24-495a-96f1-7c4917df02c0",
      name: "cryptoArt is a big bubble",
      price: 1000,
      image: CRYPTO,
      artist: "user",
    },
    {
      id: "5b2fb030-4f12-405a-9cca-04f8132dfed2",
      name: "Q U A R E N T E N A",
      price: 2700,
      image: SKULL,
      artist: "user",
    },
    {
      id: "d5983091-cf2d-4217-8aca-4a50fe07a930",
      name: "Claude Monet",
      price: 20,
      image: MONETSKULL,
      artist: "user",
    },
    {
      id: "42ac9b16-caaa-458f-8863-fe71e03767d5",
      name: "World Peace GUMBO ",
      price: 25000,
      image: GUMBO,
      artist: "user",
    },
    {
      id: "53f912a5-7b03-4d18-9ca9-055875344115",
      name: "Over There",
      price: 2000,
      image: OVERABSTRACT,
      artist: "user",
    },
    {
      id: "59e24016-df98-4f03-acb9-f24373c1cab8",
      name: "Elon Musk Blazin",
      price: 1500,
      image: ELONMUSK,
      artist: "user",
    },
    {
      id: "ce9cc26c-e310-4ce3-a6c1-1c1c4ed50a91",
      name: "Da série Presidents Mugshots",
      price: 40952,
      image: MUGSHOT,
      artist: "user",
    },
  ];

  const [priceSort, setPriceSort] = useState("");
  const [sortedArts, setSortedArts] = useState([...arts]);

  useEffect(() => {
    const newArr = [...arts];
    if (priceSort === "higher") {
      setSortedArts(newArr.sort(sortHigherPrice));
    }
    if (priceSort === "lower") {
      setSortedArts(newArr.sort(sortLowerPrice));
    }
    if (priceSort === "standard") {
      setSortedArts(arts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceSort]);

  function sortLowerPrice(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }
  function sortHigherPrice(a, b) {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  }

  return (
    <>
      <Header />
      <h1 className="title market-title">Mercado</h1>

      <div className="container-custom filter-market">
        <label htmlFor="price">filtrar por preço</label>
        <select
          name="price"
          id="price"
          onChange={(e) => {
            if (e.target.value === "higher") {
              setPriceSort("higher");
            }
            if (e.target.value === "lower") {
              setPriceSort("lower");
            }
            if (e.target.value === "standard") {
              setPriceSort("standard");
            }
          }}
          defaultValue={"DEFAULT"}
        >
          <option disabled value="DEFAULT" id="DEFAULT">
            -
          </option>
          <option value="higher">Maior</option>
          <option value="lower">Menor</option>
          <option value="standard">Padrão</option>
        </select>
      </div>
      <div className="container-custom market-container">
        <div className="filter"></div>
        {sortedArts &&
          sortedArts.map((art) => {
            return <MarketCard art={art} key={art.id} />;
          })}
      </div>
    </>
  );
};

export default Market;
