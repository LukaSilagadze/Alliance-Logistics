import React, { useEffect } from 'react';
import './services.css'; // importing services specific css

const Services = () => {
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
          <h1 className="hero-banner__title">ჩვენი სერვისები</h1>
        </div>
      </section>

      {/* Compact Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            <div className="service-item">
              <span className="material-symbols-outlined service-item__icon">local_shipping</span>
              <h3 className="service-item__title">სახმელეთო გადაზიდვები</h3>
            </div>
            <div className="service-item">
              <span className="material-symbols-outlined service-item__icon">directions_boat</span>
              <h3 className="service-item__title">საზღვაო გადაზიდვები</h3>
            </div>
            <div className="service-item">
              <span className="material-symbols-outlined service-item__icon">flight</span>
              <h3 className="service-item__title">საჰაერო გადაზიდვები</h3>
            </div>
            <div className="service-item">
              <span className="material-symbols-outlined service-item__icon">train</span>
              <h3 className="service-item__title">სარკინიგზო გადაზიდვები</h3>
            </div>
            <div className="service-item">
              <span className="material-symbols-outlined service-item__icon">warehouse</span>
              <h3 className="service-item__title">არაგაბარიტული გადაზიდვები</h3>
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
              <h2 className="service-row__title">სახმელეთო გადაზიდვები</h2>

              <h4 style={{ marginTop: "1.5rem", color: "var(--navy)" }}>
                მთლიანი ტვირთის გადაზიდვა (FTL)
              </h4>
              <p className="service-row__desc">
                კომპანიის ერთ ერთი პრიორიტეტული მიმართულებაა სახმელეთო
                გადაზიდვები. „ალიანს ლოჯისტიკი“ ახორციელებს როგორც საქართველოში
                იმპორტს, ასევე ტრანზიტული ტვირთების გადაზიდვას საქართველოს
                გავლით ევროპიდან აზიაში და პირიქით. ჩვენი მომსახურება მოიცავს:
              </p>

              <ul className="checklist">
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>კარიდან კარამდე გადაზიდვა</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>სახიფათო, აალებადი ADR ტიპის ტვირთების გადაზიდვა</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>ალკოჰოლური სასმელების გადაზიდვა</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>შესაბამისი საბაჟო ფორმალობების უზრუნველყოფა</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>დასაწყობება შესაბამის საბაჟო ტერმინალებზე</span>
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
                ნაკრები ტვირთის გადაზიდვა (LTL)
              </h4>
              <p className="service-row__desc">
                შპს „ალიანს ლოჯისტიკი“ გამოირჩევა კონკურენტული ფასებით ნაკრები
                ტვირთების გადაზიდვის მიმართულებაში. ტვირთების კონსოლიდირება
                ხდება ევროპის რამოდენიმე ქალაქში. ასევე აზიაში და თურქეთში.
              </p>

              <ul className="checklist">
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>სტანდარტული მშრალი ტვირთების გადაზიდვას</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>სამაცივრე და აალებადი ტვირთების გადაზიდვა</span>
                </li>   
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>კარიდან კარამდე მიტანის უზრუნველყოფა</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>EX 1-ის, EURO1, CMR, T1 დოკუმენტის მომზადება</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>დასაწყობება შესაბამის საბაჟო და კერძო ტერმინალებზე.</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>ევროპის ნებისმიერ ქვეყანაში სატრანსპორტო-საბროკერო მომსახურების უზრუნველყოფას</span>
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
              <h2 className="service-row__title">საჰაერო გადაზიდვები</h2>
              <p className="service-row__desc">
                შპს „ალიანს ლოჯისტიკში“ საჰაერო გადაზიდვები ხორციელდება ტვირთის
                აეროპორტიდან აეროპორტამდე და კარიდან კარამდე მიწოდებით. ჩვენი
                სანდო პარტნიორების ჩართულობით გთავაზობთ საჰაერო გადაზიდვების
                შემდეგ მომსახურებებს.
              </p>

              <ul className="checklist">
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>ტვირთის შეგროვება მსოფლიოს მასშტაბით</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>საბაჟო-საბროკერო მომსახურება</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>კარიდან კარამდე გადაზიდვა მსოფლიოს მასშტაბით</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>საკონსულტაციო მომსახურება</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>სახიფათო და სპეციალური ტვირთების გადაზიდვა</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>სწრაფი საექსპედიტორო მომსახურება მსოფლიოს მასშტაბით</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>ინდივიდუალური დაზღვევა</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>ტრანსპორტირების დოკუმენტაციის მომზადება</span>
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
              <h2 className="service-row__title">საზღვაო გადაზიდვები</h2>
              <p className="service-row__desc">
                გთავაზობთ საზღვაო გადაზიდვებს როგორც მთლიანი, ისე ნაკრები
                ტვირთების შემთხვევაში. საკონტეინერო გადაზიდვები როგორც პორტიდან
                პორტამდე, ასევე დატვირთვის მისამართიდან დაცლის მისამართამდე.
                ჩვენი მომსახურება მოიცავს:
              </p>

              <ul className="checklist">
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>მთლიან და ნაკრებ საკონტეინერო გადაზიდვას</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>სახიფათო ტვირთების გადაზიდვას/ADR</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>გემის დაფრახტვას</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>პორტიდან პორტამდე ტრანსპორტირებას</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>მძიმეწონიანი და არაგაბარიტული ტვირთების პროექტირებას</span>
                </li>
                <li className="checklist__item">
                  <span className="material-symbols-outlined checklist__icon">check_circle</span>
                  <span>საბაჟო მომსახურებას</span>
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
              <h2 className="service-row__title">სარკინიგზო გადაზიდვები</h2>
              <p className="service-row__desc">
                კომპანიის პრიოდიტეტული მიმართულება სარკინიგზო გადაზიდვებში
                წარმოადგენს აზიას. კერძოდ ჩინეთს და ყაზახეთის. აღნიშნული
                ქვეყნებიდან საქართველოსკენ ხდება როგორც იმპორტი, ასევე ექსპორტი
                საქართველოდან აზიაში.
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
              <h2 className="service-row__title">არაგაბარიტული გადაზიდვები</h2>
              <p className="service-row__desc">
                შპს „ალიანს ლოჯისტიკი“ აქტიურად არის ჩართული საპროექტო
                სამუშაოებში. დამკვეთებს ვთავაზობთ არაგაბარიტული ტვირთების
                ტრანსპორტირებას სახმელეთო, საზღვაო და სარკინიგზო გზით. ძირითადი
                მიმართულებებია აგრარული სექტორი, სამშენებლო სფერი, მძიმე ტექნიკა
                და ა.შ.
              </p>
              <p className="service-row__desc">
                გადაზიდვისას განსაკუთრებული ყურადღება ექცევა სწორი დატვირთვის
                კონტროლს და სადაზღვეო პირობებს. რასაც გადაზიდვის რისკები
                მინიმუმამდე დაჰყავს.
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
