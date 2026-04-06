import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getLinkClass = (path) => {
    return `nav__link ${location.pathname === path ? 'nav__link--active' : ''}`;
  };

  return (
    <header className="header">
      {/* Top row */}
      <div className="header__top">
        <div className="container header__top-inner">
          <Link to="/" className="logo">
            <img src="/img/logo_white.png" alt="Alliance Logistics" className="logo_img" />
          </Link>

          <div className="header__top-items">
            <div className="header__top-item">
              <span className="material-symbols-outlined header__top-icon">schedule</span>
              <div className="header__top-text">
                <span>{t('header.monday_friday')}</span>
                <span>{t('header.monday_friday_hours')}</span>
              </div>
            </div>
            <div className="header__top-item">
              <span className="material-symbols-outlined header__top-icon">mail</span>
              <div className="header__top-text">
                <span>{t('header.email')}</span>
                <span>z.gigauri@alogistics.ge</span>
                <span>office@alogistics.ge</span>
              </div>
            </div>
            <div className="header__top-item">
              <span className="material-symbols-outlined header__top-icon">call</span>
              <div className="header__top-text">
                <span>{t('header.contact_us_top')}</span>
                <span>Mob: +995 599 646410</span>
                <span>Office: +995 32 2194447</span>
              </div>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Bottom row: nav, socials, CTA */}
      <div className="header__bottom">
        <div className="container header__bottom-inner">

          <nav className="nav">
            <Link to="/" className={getLinkClass("/")} onClick={closeMobileMenu}>{t('header.nav_home')}</Link>
            <Link to="/services" className={getLinkClass("/services")} onClick={closeMobileMenu}>{t('header.nav_services')}</Link>
            <Link to="/about" className={getLinkClass("/about")} onClick={closeMobileMenu}>{t('header.nav_about')}</Link>
            <Link to="/career" className={getLinkClass("/career")} onClick={closeMobileMenu}>{t('header.nav_career')}</Link>
            <Link to="/contact" className={getLinkClass("/contact")} onClick={closeMobileMenu}>{t('header.nav_contact')}</Link>
          </nav>

          <div className="header__bottom-right">
            <div className="header__socials">
              <a href="#" className="header__social-link" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/995599646410" className="header__social-link" aria-label="Whatsapp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" className="header__social-link" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (Optional structure if it exists, matching original behavior) */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav">
          <Link to="/" className="mobile-menu__link" onClick={closeMobileMenu}>{t('header.nav_home')}</Link>
          <Link to="/services" className="mobile-menu__link" onClick={closeMobileMenu}>{t('header.nav_services')}</Link>
          <Link to="/about" className="mobile-menu__link" onClick={closeMobileMenu}>{t('header.nav_about')}</Link>
          <Link to="/career" className="mobile-menu__link" onClick={closeMobileMenu}>{t('header.nav_career')}</Link>
          <Link to="/contact" className="mobile-menu__link" onClick={closeMobileMenu}>{t('header.nav_contact')}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
