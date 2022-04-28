import React from "react";
import logo from "../asset/Logo.png";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="Header-container">
      <img src={logo} className="Header-logo" alt="logo" />
      <nav >
        <Link to ="/" className="Header-nav-menu">
          Accueil
        </Link>
        <Link to="/About" className="Header-nav-menu">
          A Propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
