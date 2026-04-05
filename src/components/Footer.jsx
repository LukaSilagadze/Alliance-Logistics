import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="logo logo--light">
              <img src="/img/logo_white.png" alt="Alliance Logistics" className="logo_img" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">სწრაფი ბმულები</h4>
            <ul className="footer__list">
              <li><Link to="/services" className="footer__link">სერვისები</Link></li>
              <li><Link to="/about" className="footer__link">ჩვენს შესახებ</Link></li>
              <li><a href="#" className="footer__link">ტვირთის თვალთვალი</a></li>
              <li><a href="#" className="footer__link">კონფიდენციალურობის პოლიტიკა</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">საკონტაქტო ინფორმაცია</h4>
            <ul className="footer__list">
              <li className="footer__contact-item">
                <span className="material-symbols-outlined footer__contact-icon">location_on</span>
                <span>11 A.Apakidze str. floor #8. Tbilisi, Georgia</span>
              </li>
              <li className="footer__contact-item">
                <span className="material-symbols-outlined footer__contact-icon">call</span>
                <span>Mob: +995 599 646410</span>
                <span>Office: +995 32 2194447</span>
              </li>
              <li className="footer__contact-item">
                <span className="material-symbols-outlined footer__contact-icon">mail</span>
                <span>z.gigauri@alogistics.ge </span>
                <span>office@alogistics.ge</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} ალიანს ლოჯისტიკი. ყველა უფლება დაცულია.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social">Facebook</a>
            <a href="#" className="footer__social">LinkedIn</a>
            <a href="#" className="footer__social">Whatsapp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
