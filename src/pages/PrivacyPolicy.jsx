import React from 'react';
import { useTranslation } from 'react-i18next';
import './privacyPolicy.css';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <main className="privacy-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div
          className="hero-banner__bg-image"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1507925922893-87310a08e1e9?q=80&w=2070")`
          }}
        ></div>
        <div className="hero-banner__overlay"></div>
        <div className="container">
          <h1 className="hero-banner__title">{t('privacy.title')}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content-section">
        <div className="container">
          <div className="privacy-card">
            <p className="privacy-last-updated">{t('privacy.last_updated')}</p>
            <p className="privacy-intro">{t('privacy.intro')}</p>

            <div className="privacy-section">
              <h2>{t('privacy.section1_title')}</h2>
              <p>{t('privacy.section1_text')}</p>
            </div>

            <div className="privacy-section">
              <h2>{t('privacy.section2_title')}</h2>
              <p>{t('privacy.section2_text')}</p>
            </div>

            <div className="privacy-section">
              <h2>{t('privacy.section3_title')}</h2>
              <p>{t('privacy.section3_text')}</p>
            </div>

            <div className="privacy-section">
              <h2>{t('privacy.section4_title')}</h2>
              <p>{t('privacy.section4_text')}</p>
            </div>

            <div className="privacy-section">
              <h2>{t('privacy.section5_title')}</h2>
              <p>{t('privacy.section5_text')}</p>
              <ul>
                <li>
                  <a href={`mailto:${t('privacy.email1')}`}>{t('privacy.email1')}</a>
                </li>
                <li>
                  <a href={`mailto:${t('privacy.email2')}`}>{t('privacy.email2')}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
