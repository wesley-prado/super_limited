import React from "react";
import Header from "../../components/header";
import "./activity.css";

//img
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
  USERPROFILE,
} from "../../shared/imgLinks";

//Components
import ActivityCard from "../../components/activityCard";
const Activity = () => {
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

  return (
    <>
      <Header />
      <h1 className="title activity-page-title">Atividades</h1>
      <div className="container-custom activity-page-container">
        <div className="activity-left">
          {arts.map((art) => (
            <ActivityCard
              img={art.image}
              text={`Lorem ipsum dolor sit amet, consectetur. `}
            />
          ))}
        </div>
        <div className="activity-right">
          <aside className="activity-aside">
            <h3 className="aside-title">Top Colecionadores</h3>
            <div className="activity-page-user-row">
              <img
                className="user-profile-aside"
                src={USERPROFILE}
                alt="user"
              />
              <a href="">@User</a>
            </div>
            <div className="activity-page-user-row">
              <img
                className="user-profile-aside"
                src={USERPROFILE}
                alt="user"
              />
              <a href="">@User</a>
            </div>
            <div className="activity-page-user-row">
              <img
                className="user-profile-aside"
                src={USERPROFILE}
                alt="user"
              />
              <a href="">@User</a>
            </div>
            <div className="activity-page-user-row">
              <img
                className="user-profile-aside"
                src={USERPROFILE}
                alt="user"
              />
              <a href="">@User</a>
            </div>
            <div className="activity-page-user-row">
              <img
                className="user-profile-aside"
                src={USERPROFILE}
                alt="user"
              />
              <a href="">@User</a>
            </div>
          </aside>
          <aside className="activity-aside">
            <div>
              <h3 className="aside-title">Top Colecionadores</h3>
              <div className="activity-page-user-row">
                <img
                  className="user-profile-aside"
                  src={USERPROFILE}
                  alt="user"
                />
                <a href="">@User</a>
              </div>
              <div className="activity-page-user-row">
                <img
                  className="user-profile-aside"
                  src={USERPROFILE}
                  alt="user"
                />
                <a href="">@User</a>
              </div>
              <div className="activity-page-user-row">
                <img
                  className="user-profile-aside"
                  src={USERPROFILE}
                  alt="user"
                />
                <a href="">@User</a>
              </div>
              <div className="activity-page-user-row">
                <img
                  className="user-profile-aside"
                  src={USERPROFILE}
                  alt="user"
                />
                <a href="">@User</a>
              </div>
              <div className="activity-page-user-row">
                <img
                  className="user-profile-aside"
                  src={USERPROFILE}
                  alt="user"
                />
                <a href="">@User</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Activity;
