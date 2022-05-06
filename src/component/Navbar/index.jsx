import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../asset/Logo.png";
import './Navbar.css'

/**
 * Header for each page with Nav-bar
 * @returns JSX elements
 */

const Navbar = () => {
    return (
    <header className="Header-container">
        <Link to="/">
        <img src={logo} className="Header-logo" alt="logo" />
        </Link>

        <nav  className='nav-menu-container'>
          <NavLink  
            to ="/" 
            className={(navData) => navData.isActive ? "active" : "nav-menu" }            
            exact="ture">
            Accueil
          </NavLink>
          <NavLink  
            to="/About" 
            className={(navData) => navData.isActive ? "active" : "nav-menu" }       
             >
            A Propos
          </NavLink>
     
        
        </nav>
    </header>
  )
}

export default Navbar
