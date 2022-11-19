import React, { useState } from 'react'
import './styles/header.css'
import { Link } from 'react-router-dom'

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
        <Link to='/' className="nav__logo">Briggitte</Link>
      <div className={showClose} onClick={showHidden} id="nav-menu">
        <ul className="nav__list grid">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              <i className="fa-solid fa-house nav__icon"></i> Home
            </Link>
          </li>
          <li className="nav__item">
            <Link  to="/aboutme" className="nav__link">
              <i className="fa-solid fa-user nav__icon"></i> About me
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/skills" className="nav__link">
              <i className="fa-sharp fa-solid fa-file-invoice nav__icon"></i> Skills
            </Link>
          </li>
          <li className="nav__item">
            <Link  to="/services" className="nav__link">
              <i className="fa-solid fa-briefcase nav__icon"></i> Services
            </Link>
          </li>
          <li className="nav__item">
            <Link  to="/portfolio" className="nav__link">
              <i className="fa-solid fa-image nav__icon"></i> Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              <i className="fa-solid fa-address-book nav__icon"></i> Contact me
            </Link>
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