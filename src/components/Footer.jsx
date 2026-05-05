import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
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
            <h4 className="footer__col-title">{t('footer.quick_links')}</h4>
            <ul className="footer__list">
              <li><Link to="/services" className="footer__link">{t('header.nav_services')}</Link></li>
              <li><Link to="/about" className="footer__link">{t('header.nav_about')}</Link></li>
              <li><Link to="/contact" className="footer__link">{t('header.nav_contact')}</Link></li>
              <li><Link to="/career" className="footer__link">{t('header.nav_career')}</Link></li>
              <li><Link to="/privacy-policy" className="footer__link">{t('footer.privacy_policy')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">{t('footer.contact_info')}</h4>
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
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social" target='_blank'>Facebook</a>
            <a href="#" className="footer__social" target='_blank'>LinkedIn</a>
            <a href="https://wa.me/995599646410" className="footer__social" target='_blank'>Whatsapp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
