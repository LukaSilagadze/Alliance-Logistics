import React, { useEffect } from 'react';
import './services.css';
import { useTranslation } from 'react-i18next'; // importing services specific css

const Services = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // Scroll-reveal on service rows
    const revealTargets = document.querySelectorAll(".service-row__layout, .cta__inner");
    revealTargets.forEach((el) => el.classList.add("reveal"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -48px 0px",
      }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));

    // Staggered reveal
    function applyStagger(containerSelector, childSelector) {
      document.querySelectorAll(containerSelector).forEach((container) => {
        const children = container.querySelectorAll(childSelector);
        children.forEach((child, i) => {
          child.style.opacity = "0";
          child.style.transform = "translateX(-18px)";
          child.style.transition = `opacity .4s ease ${i * 0.1}s, transform .4s ease ${i * 0.1}s`;
        });

        const parentRow = container.closest(".service-row__layout");
        if (!parentRow) return;

        const staggerObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                children.forEach((child) => {
                  child.style.opacity = "1";
                  child.style.transform = "translateX(0)";
                });
                staggerObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2 }
        );
        staggerObserver.observe(parentRow);
      });
    }

    applyStagger(".checklist", ".checklist__item");
    applyStagger(".feature-list", ".feature-list__item");
    applyStagger(".mode-grid", ".mode-card");

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div
          className="hero-banner__bg-image"
          style={{ backgroundImage: "url(/img/ship.jpeg)" }}
        ></div>
        <div className="hero-banner__overlay"></div>
        <div className="container">
          <h1 className="hero-banner__title">{t("services.title")}</h1>
        </div>
      </section>

      {/* Compact Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            <div className="service-item">
              <span className="material-symbols-outlined service-item__icon">local_shipping</span>
              <h3 className="service-item__title">{t("services.road.title")}</h3>
            </div>
            <div className="service-item">
              <span className="material-symbols-outlined service-item__icon">directions_boat</span>
              <h3 className="service-item__title">{t("services.sea.title")}</h3>
            </div>
            <div className="service-item">
              <span className="material-symbols-outlined service-item__icon">flight</span>
              <h3 className="service-item__title">{t("services.air.title")}</h3>
            </div>
            <div className="service-item">
              <span className="material-symbols-outlined service-item__icon">train</span>
              <h3 className="service-item__title">{t("services.rail.title")}</h3>
            </div>
            <div className="service-item">
              <span className="material-symbols-outlined service-item__icon">warehouse</span>
              <h3 className="service-item__title">{t("services.oversize.title")}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Service Rows */}
      {/* Row 1 */}
      <section className="service-row service-row--white">
        <div className="container land_freight_container">
          <div className="service-row__layout">
            <div className="service-row__text">
              <h2 className="service-row__title">{t("services.road.title")}</h2>

              <h4 style={{ marginTop: "1.5rem", color: "var(--navy)" }}>
                {t("home.road_ftl")}
              </h4>
              <p className="service-row__desc">
                {t("services.road.p1")}
              </p>

              <ul className="checklist">
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.road.check1")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.road.check2")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.road.check3")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.road.check4")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.road.check5")}</span>
                </li>
              </ul>
            </div>

            <div className="service-row__media">
              <div
                className="service-row__img"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJR8l40FOOExzoiNTvJpiJ7XF9UY4-mr0nNmlxDTxJDXQI-8BdvbzXU7O-8eeXr3cgvcoToMSC1o7iYHoXO2ojl36Zptl-yKvLfgp4j7DJSXaLVHoUBmXC-8ESsXDxHSdF3hqC-oG1T9QEGslODAxZa4HPNZ53k1Jh7d1CfVp5hxSwZSs8s9NETLK63p4JQ5cmV8V2na8qaRImTZh9G7wNX8S-nlHyc8Wy7iWgDpjZ5QqUIl0PUiU7dZjeL9ACGtZoEfFwB6-sDA7p")`
                }}
              ></div>
            </div>
          </div>
          <div className="service-row__layout">
            <div className="service-row__media">
              <div className="service-row__map">
                <iframe
                  title="Alliance Logistics Map"
                  src="https://www.google.com/maps/d/embed?mid=19qI0mgWGXt0Zdn9nXI3XYZCKcRIT1x4&ehbc=2E312F"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>

            <div className="service-row__text">
              <h4 style={{ marginTop: "1.5rem", color: "var(--navy)" }}>
                {t("home.road_ltl")}
              </h4>
              <p className="service-row__desc">
                {t("services.road.p2")}
              </p>

              <ul className="checklist">
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.road.check6")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.road.check7")}</span>
                </li>   
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.road.check8")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.road.check9")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.road.check10")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.road.check11")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2 */}
      <section className="service-row service-row--alt">
        <div className="container">
          <div className="service-row__layout service-row__layout--reverse">
            <div className="service-row__text">
              <h2 className="service-row__title">{t("services.air.title")}</h2>
              <p className="service-row__desc">
                {t("services.air.p1")}
              </p>

              <ul className="checklist">
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.air.check1")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.air.check2")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.air.check3")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.air.check4")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.air.check5")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.air.check6")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.air.check7")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.air.check8")}</span>
                </li>
              </ul>
            </div>

            <div className="service-row__media">
              <div
                className="service-row__img"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=1200")`
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 3 */}
      <section className="service-row service-row--white">
        <div className="container">
          <div className="service-row__layout">
            <div className="service-row__text">
              <h2 className="service-row__title">{t("services.sea.title")}</h2>
              <p className="service-row__desc">
                {t("services.sea.p1")}
              </p>

              <ul className="checklist">
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.sea.check1")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.sea.check2")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.sea.check3")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.sea.check4")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.sea.check5")}</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>{t("services.sea.check6")}</span>
                </li>
              </ul>
            </div>

            <div className="service-row__media">
              <div
                className="service-row__img"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbMK-zhotrMhbVWWb62oW0X9TUxNfFFHcwS8306OkY558s_HV-MCthkYUF6-Od_clWcLq9XsAMU7RZPQW_FwzWwtX8LxDafm7fqIAC-0Tg08jXMr_2ORgbRkF9rLE8ZJJVFvSI-6DafvdMy8eijhbXuoFf0ygRclhDueUXSUaG140WGqemoZ_ahMnj5M6PqIl88YaJFqfVH7Vzq0jr5ZsYcrr9Kms3xce_th_L4AgR6ab0d2OrNWC64EKvf1omW_VB9JQERds9A33-")`
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 4 */}
      <section className="service-row service-row--alt">
        <div className="container">
          <div className="service-row__layout service-row__layout--reverse">
            <div className="service-row__text">
              <h2 className="service-row__title">{t("services.rail.title")}</h2>
              <p className="service-row__desc">
                {t("services.rail.p1")}
              </p>
            </div>

            <div className="service-row__media">
              <div
                className="service-row__img"
                style={{ backgroundImage: "url(/img/train.jpg)" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 5 */}
      <section className="service-row service-row--white">
        <div className="container">
          <div className="service-row__layout">
            <div className="service-row__text">
              <h2 className="service-row__title">{t("services.oversize.title")}</h2>
              <p className="service-row__desc">
                {t("services.oversize.p1")}
              </p>
              <p className="service-row__desc">
                {t("services.oversize.p2")}
              </p>
            </div>

            <div className="service-row__media">
              <div
                className="service-row__img"
                style={{ backgroundImage: "url(/img/oversize_freight.jpeg)" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
