import React from 'react'
import './styles/footer.css'

const Footer = () => {
  
  return (
    <footer className='footer' id='footer'>
      <div className="footer__bg">
        <div className="footer__container container grid">
          
          <div>
            <h1 className="footer__title">Briggitte</h1>
            <span className="footer__subtitle">Frontend developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className='footer__link'>Services</a>
            </li>
            <li>
              <a href="#portfolio" className='footer__link'>Portfolio</a>
            </li>
            <li>
              <a href="#contact" className='footer__link'>Contact</a>
            </li>
          </ul>

          <div className="footer__socials">
            <a href="https://twitter.com/jbriggitt06?t=WeuZoWOR_kk94SnG1NU92Q&s=09" className="footer__social">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/jbriggitte_06/" className="footer__social">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://t.me/Brigg20" className="footer__social">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://t.me/Brigg20" className="footer__social">
              <i className="fa-brands fa-slack"></i>
            </a>
          </div>

        </div>
        <p className="footer__copy">&#169; Bri. All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer