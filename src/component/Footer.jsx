import React from 'react'
import Logo from '../asset/Logo.svg'
import '../util/Footer.css'

const Footer = () => {
  return (
    <div className="Footer-container">
      <img  src={Logo} alt="Logo"></img>
      <p className="Footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
