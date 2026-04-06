import React from 'react';
import { Link } from 'react-router-dom';
import StatCounter from '../components/StatCounter';
import './about.css'; // importing about specific css
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <main>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div
          className="hero-banner__bg-image"
          style={{ backgroundImage: "url(/img/ship.avif)" }}
        ></div>
        <div className="hero-banner__overlay"></div>
        <div className="container">
          <h1 className="hero-banner__title">{t('about.title')}</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container about-content__container">
          <div className="about-content__inner">
            <div className="about-content__text-section">
              <h2 className="about-content__title">{t('about.title')}</h2>
              <p className="about-content__text">
                {t('about.text1')}
              </p>
              <p className="about-content__text">
                {t('about.text2')}
              </p>
            </div>
            <div className="about-content__image-section">
              <img className="about-content__image" src="/img/lorry2.jpg" alt="" />
            </div>
          </div>
          <div className="about-content__inner">
            <div className="about-content__image-section">
              <img
                src="/img/lorry1.jpg"
                alt="Alliance Logistics team working together"
                className="about-content__image"
              />
            </div>
            <div className="about-content__text-section">
              <p className="about-content__text">
                {t('about.text3')}
              </p>
              <p className="about-content__text">
                {t('about.text4')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats">
            <StatCounter value="15+" label={t('stats.years_experience')} />
            <StatCounter value="200+" label={t('stats.global_partner')} />
            <StatCounter value="24/7" label={t('stats.active_support')} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
