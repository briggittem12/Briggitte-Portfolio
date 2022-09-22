import React, { useState } from 'react'
import './styles/header.css'

const Header = () => {

  const [showClose, setShowClose] = useState("nav__menu") 

  let showHidden = () => {
    if(showClose === "nav__menu")
      setShowClose("nav__menu show-menu") 
      else if (showClose === "nav__menu") 
      setShowClose("nav__menu nav__close")
      else
      setShowClose("nav__menu")
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Briggitte</a>
      <div className={showClose} id="nav-menu">
        <ul className="nav__list grid">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              <i className="fa-solid fa-house nav__icon"></i> Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <i className="fa-solid fa-user nav__icon"></i> About me
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              <i className="fa-sharp fa-solid fa-file-invoice nav__icon"></i> Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              <i className="fa-solid fa-briefcase nav__icon"></i> Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#portfolio" className="nav__link">
              <i className="fa-solid fa-image nav__icon"></i> Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <i className="fa-solid fa-address-book nav__icon"></i> Contact me
            </a>
          </li>
        </ul>
        <i onClick={showHidden} className="fa-sharp fa-solid fa-xmark nav__close" id="nav-close"></i>
      </div>
      <div className="nav__btns" onClick={showHidden}>
        <div className="nav__toggle" id="nav-toggle">
        <i className="fa-sharp fa-solid fa-bars"></i>
        </div>
      </div>
      </nav>
    </header>
  )
}

export default Header