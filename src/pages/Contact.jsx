import React from 'react';
import './contact.css'; // importing contact specific css
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <main>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div
          className="hero-banner__bg-image"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070")`
          }}
        ></div>
        <div className="hero-banner__overlay"></div>
        <div className="container">
          <h1 className="hero-banner__title">{t('contact.title')}</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-section__inner">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="contact-info__title">{t('contact.info_title')}</h2>
              <p className="contact-info__subtitle">
                {t('contact.info_subtitle')}
              </p>

              <div className="contact-info__list">
                {/* Address */}
                <div className="contact-info__item">
                  <div className="contact-info__icon-wrap">
                    <span className="material-symbols-outlined contact-info__icon">location_on</span>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__label">{t('contact.address_label')}</h3>
                    <p className="contact-info__text">
                      11 A.Apakidze str. floor #8. Tbilisi, Georgia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info__item">
                  <div className="contact-info__icon-wrap">
                    <span className="material-symbols-outlined contact-info__icon">call</span>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__label">{t('contact.phone_label')}</h3>
                    <p className="contact-info__text">
                      Mob: +995 599 646410<br />
                      Office: +995 32 2194447
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info__item">
                  <div className="contact-info__icon-wrap">
                    <span className="material-symbols-outlined contact-info__icon">mail</span>
                  </div>
                  <div className="contact-info__content">
                    <h3 className="contact-info__label">{t('contact.email_label')}</h3>
                    <p className="contact-info__text">
                      z.gigauri@alogistics.ge<br />
                      office@alogistics.ge
                    </p>
                  </div>
                </div>
              </div>

              {/* Map iframe */}
              <div className="contact-info__map">
                <iframe
                  title="Alliance Logistics Location"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d722.3229161278207!2d44.77982811787717!3d41.7201225032641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sApakidze%20str!5e1!3m2!1sen!2sge!4v1770399184245!5m2!1sen!2sge"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
