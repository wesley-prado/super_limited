import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <nav className="nav">
          <Link className="logo" to="/">
            <h1>RandomArtwork</h1>
          </Link>
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to="/market">
                Mercado
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/activity">
                Atividade
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#">
                Entrar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
