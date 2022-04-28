import React from "react";
import logo from "../asset/Logo.png";

const Header = () => {
  return (
    <header className="Header-container">
      <img src={logo} className="Header-logo" alt="logo" />
      <nav >
        <a href="/" className="Header-nav-menu">
          Accueil
        </a>
        <a href="/About" className="Header-nav-menu">
          A Propos
        </a>
      </nav>
    </header>
  );
};

export default Header;
