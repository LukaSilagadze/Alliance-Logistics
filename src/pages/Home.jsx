import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StatCounter from '../components/StatCounter';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('air');

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg-image"></div>
        <div className="hero__overlay"></div>
        <div className="hero__dots"></div>
        <div className="hero__content">
          <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: t('home.hero_title') }}></h1>
          <p className="hero__subtitle">
            {t('home.hero_subtitle')}
          </p>
          <Link to="/contact">
            <button className="btn btn--primary btn--lg">{t('home.cta')}</button>
          </Link>
        </div>
        <div className="hero__accent"></div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="services__container">
          <div className="services__nav">
            <div 
              className={`services__nav-item ${activeTab === 'air' ? 'active' : ''}`} 
              onClick={() => setActiveTab('air')}
            >
              <span className="material-symbols-outlined services__nav-icon">flight</span>
              <span className="services__nav-text">{t("home.air_freight")}</span>
            </div>
            <div 
              className={`services__nav-item ${activeTab === 'road' ? 'active' : ''}`} 
              onClick={() => setActiveTab('road')}
            >
              <span className="material-symbols-outlined services__nav-icon">local_shipping</span>
              <span className="services__nav-text">{t("home.road_freight")}</span>
            </div>
            <div 
              className={`services__nav-item ${activeTab === 'sea' ? 'active' : ''}`} 
              onClick={() => setActiveTab('sea')}
            >
              <span className="material-symbols-outlined services__nav-icon">sailing</span>
              <span className="services__nav-text">{t("home.sea_freight")}</span>
            </div>
            <div 
              className={`services__nav-item ${activeTab === 'rail' ? 'active' : ''}`} 
              onClick={() => setActiveTab('rail')}
            >
              <span className="material-symbols-outlined services__nav-icon">train</span>
              <span className="services__nav-text">{t("home.rail_freight")}</span>
            </div>
            <div 
              className={`services__nav-item ${activeTab === 'warehouse' ? 'active' : ''}`} 
              onClick={() => setActiveTab('warehouse')}
            >
              <i className="fa-solid fa-warehouse"></i>
              <span className="services__nav-text">{t("home.warehouse_oversized")}</span>
            </div>
          </div>

          <div className="services__display">
            <div className={`services__content ${activeTab === 'air' ? 'active' : ''}`} id="service-air">
              <div
                className="services__bg"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=1200")`
                }}
              ></div>
              <div className="services__info">
                <h1 className="services__inner-title">{t("home.air_freight")}</h1>
                <p className="services__desc">
                  {t('home.air_desc')}
                </p>
                <Link to="/services" className="btn btn--primary">{t('home.learn_more')}</Link>
              </div>
            </div>
            
            <div className={`services__content ${activeTab === 'road' ? 'active' : ''}`} id="service-road">
              <div
                className="services__bg"
                style={{ backgroundImage: `url(/img/about_img1.avif)` }}
              ></div>
              <div className="services__info">
                <h1 className="services__inner-title">{t("home.road_freight")}</h1>
                <p className="services__desc">
                  <span className="service__desc_subtitle">{t("home.road_ftl")}</span>
                  <span>
                    {t('home.road_ftl_desc')}
                  </span>
                  <br />
                  <span className="service__desc_subtitle">{t("home.road_ltl")}</span>
                  <span>
                    {t('home.road_ltl_desc')}
                  </span>
                </p>
                <Link to="/services" className="btn btn--primary">{t('home.learn_more')}</Link>
              </div>
            </div>
            
            <div className={`services__content ${activeTab === 'sea' ? 'active' : ''}`} id="service-sea">
              <div
                className="services__bg"
                style={{ backgroundImage: `url(/img/sea.png)` }}
              ></div>
              <div className="services__info">
                <h1 className="services__inner-title">{t("home.sea_freight")}</h1>
                <p className="services__desc">
                  {t('home.sea_desc')}
                </p>
                <Link to="/services" className="btn btn--primary">{t('home.learn_more')}</Link>
              </div>
            </div>
            
            <div className={`services__content ${activeTab === 'rail' ? 'active' : ''}`} id="service-rail">
              <div
                className="services__bg"
                style={{ backgroundImage: `url(/img/train.jpg)` }}
              ></div>
              <div className="services__info">
                <h1 className="services__inner-title">{t("home.rail_freight")}</h1>
                <p className="services__desc">
                  {t('home.rail_desc')}
                </p>
                <Link to="/services" className="btn btn--primary">{t('home.learn_more')}</Link>
              </div>
            </div>
            
            <div className={`services__content ${activeTab === 'warehouse' ? 'active' : ''}`} id="service-warehouse">
              <div
                className="services__bg"
                style={{ backgroundImage: `url(/img/oversize.jpg)` }}
              ></div>
              <div className="services__info">
                <h1 className="services__inner-title">{t("home.warehouse_oversized")}</h1>
                <p className="services__desc">
                  {t('home.oversize_desc')}
                </p>
                <Link to="/services" className="btn btn--primary">{t('home.learn_more')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="about__bg"></div>
        <div className="container about__container">
          <div className="about__card">
            <h2 className="about__card-title">{t("home.about_title")}</h2>
            <p className="about__card-text">
              {t('home.about_text')}
            </p>
            <Link to="/about" className="btn btn--primary about__card-btn">
              {t('home.learn_more')}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container container--stats">
          <div className="stats">
            <StatCounter value="15+" label={t('stats.years_experience')} />
            <StatCounter value="200+" label={t('stats.global_partner')} />
            <StatCounter value="24/7" label={t('stats.global_support')} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
