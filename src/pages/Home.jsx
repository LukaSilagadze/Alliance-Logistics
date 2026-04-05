import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StatCounter from '../components/StatCounter';

const Home = () => {
  const [activeTab, setActiveTab] = useState('air');

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg-image"></div>
        <div className="hero__overlay"></div>
        <div className="hero__dots"></div>
        <div className="hero__content">
          <h1 className="hero__title">საიმედო<br />ლოჯისტიკური გადაწყვეტილებები</h1>
          <p className="hero__subtitle">
            „ალიანს ლოჯისტიკი“ გთავაზობთ სწრაფ, საიმედო და კონკურენტულ
            საერთაშორისო ლოჯისტიკურ მომსახურებას ნებისმიერი ტიპის ტვირთისთვის.
          </p>
          <Link to="/contact">
            <button className="btn btn--primary btn--lg">დაგვიკავშირდით</button>
          </Link>
        </div>
        <div className="hero__accent"></div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container services__container">
          <div className="services__nav">
            <div 
              className={`services__nav-item ${activeTab === 'air' ? 'active' : ''}`} 
              onClick={() => setActiveTab('air')}
            >
              <span className="material-symbols-outlined services__nav-icon">flight</span>
              <span className="services__nav-text">საჰაერო გადაზიდვები</span>
            </div>
            <div 
              className={`services__nav-item ${activeTab === 'road' ? 'active' : ''}`} 
              onClick={() => setActiveTab('road')}
            >
              <span className="material-symbols-outlined services__nav-icon">local_shipping</span>
              <span className="services__nav-text">სახმელეთო გადაზიდვები</span>
            </div>
            <div 
              className={`services__nav-item ${activeTab === 'sea' ? 'active' : ''}`} 
              onClick={() => setActiveTab('sea')}
            >
              <span className="material-symbols-outlined services__nav-icon">sailing</span>
              <span className="services__nav-text">საზღვაო გადაზიდვები</span>
            </div>
            <div 
              className={`services__nav-item ${activeTab === 'rail' ? 'active' : ''}`} 
              onClick={() => setActiveTab('rail')}
            >
              <span className="material-symbols-outlined services__nav-icon">train</span>
              <span className="services__nav-text">სარკინიგზო გადაზიდვები</span>
            </div>
            <div 
              className={`services__nav-item ${activeTab === 'warehouse' ? 'active' : ''}`} 
              onClick={() => setActiveTab('warehouse')}
            >
              <i className="fa-solid fa-warehouse"></i>
              <span className="services__nav-text">არაგაბარიტული გადაზიდვები</span>
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
                <h1 className="services__inner-title">საჰაერო გადაზიდვები</h1>
                <p className="services__desc">
                  შპს „ალიანს ლოჯისტიკი“ ახორციელებს საჰაერო გადაზიდვებს
                  აეროპორტიდან აეროპორტამდე და კარიდან კარამდე მსოფლიოს
                  მასშტაბით. კომპანია უზრუნველყოფს სრულ ლოჯისტიკურ მომსახურებას,
                  მათ შორის საბაჟო გაფორმებას, სპეციალური ტვირთების გადაზიდვას,
                  დაზღვევასა და დოკუმენტაციის მომზადებას.
                </p>
                <Link to="/services" className="btn btn--primary">გაიგეთ მეტი</Link>
              </div>
            </div>
            
            <div className={`services__content ${activeTab === 'road' ? 'active' : ''}`} id="service-road">
              <div
                className="services__bg"
                style={{ backgroundImage: `url(/img/about_img1.avif)` }}
              ></div>
              <div className="services__info">
                <h1 className="services__inner-title">სახმელეთო გადაზიდვები</h1>
                <p className="services__desc">
                  <span className="service__desc_subtitle">მთლიანი ტვირთის გადაზიდვა (FTL)</span>
                  <span>
                    „ალიანს ლოჯისტიკი“ ახორციელებს სახმელეთო გადაზიდვებსა და
                    ევროპა–აზიის ტრანზიტს კარიდან კარამდე სრული
                    მომსახურებით.
                  </span>
                  <br />
                  <span className="service__desc_subtitle">ნაკრები ტვირთის გადაზიდვა (LTL)</span>
                  <span>
                    კომპანია სთავაზობს ნაკრები ტვირთების გადაზიდვას ევროპის,
                    თურქეთისა და აზიის მიმართულებით კონსოლიდაციითა და
                    დოკუმენტაციის მომზადებით.
                  </span>
                </p>
                <Link to="/services" className="btn btn--primary">გაიგეთ მეტი</Link>
              </div>
            </div>
            
            <div className={`services__content ${activeTab === 'sea' ? 'active' : ''}`} id="service-sea">
              <div
                className="services__bg"
                style={{ backgroundImage: `url(/img/sea.png)` }}
              ></div>
              <div className="services__info">
                <h1 className="services__inner-title">საზღვაო გადაზიდვები</h1>
                <p className="services__desc">
                  გთავაზობთ საზღვაო გადაზიდვებს როგორც მთლიანი, ისე ნაკრები
                  ტვირთების შემთხვევაში. საკონტეინერო გადაზიდვები როგორც
                  პორტიდან პორტამდე, ასევე დატვირთვის მისამართიდან დაცლის
                  მისამართამდე.
                </p>
                <Link to="/services" className="btn btn--primary">გაიგეთ მეტი</Link>
              </div>
            </div>
            
            <div className={`services__content ${activeTab === 'rail' ? 'active' : ''}`} id="service-rail">
              <div
                className="services__bg"
                style={{ backgroundImage: `url(/img/train.jpg)` }}
              ></div>
              <div className="services__info">
                <h1 className="services__inner-title">სარკინიგზო გადაზიდვები</h1>
                <p className="services__desc">
                  კომპანიის პრიოდიტეტული მიმართულება სარკინიგზო გადაზიდვებში
                  წარმოადგენს აზიას. კერძოდ ჩინეთს და ყაზახეთის. აღნიშნული
                  ქვეყნებიდან საქართველოსკენ ხდება როგორც იმპორტი, ასევე
                  ექსპორტი საქართველოდან აზიაში.
                </p>
                <Link to="/services" className="btn btn--primary">გაიგეთ მეტი</Link>
              </div>
            </div>
            
            <div className={`services__content ${activeTab === 'warehouse' ? 'active' : ''}`} id="service-warehouse">
              <div
                className="services__bg"
                style={{ backgroundImage: `url(/img/oversize.jpg)` }}
              ></div>
              <div className="services__info">
                <h1 className="services__inner-title">არაგაბარიტული გადაზიდვები</h1>
                <p className="services__desc">
                  დამკვეთებს ვთავაზობთ არაგაბარიტული ტვირთების ტრანსპორტირებას
                  სახმელეთო, საზღვაო და სარკინიგზო გზით. ძირითადი მიმართულებებია
                  აგრარული სექტორი, სამშენებლო სფერი, მძიმე ტექნიკა და ა.შ.
                </p>
                <Link to="/services" className="btn btn--primary">გაიგეთ მეტი</Link>
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
            <h2 className="about__card-title">ჩვენს შესახებ</h2>
            <p className="about__card-text">
              კომპანია „ალიანს ლოჯისტიკი“ საქართველოს ბაზარზე წარმოდგენილია 2011
              წლიდან, როგორც საერთაშორისო გადამზიდავი ფორვარდერი კომპანია.
              კომპანია ორიენტირებულია მომხმარებლებისთვის მაღალი ხარისხის
              მომსახურების მიწოდებაზე, რომელსაც უზრუნველყობს გამოცდილი გუნდი.
            </p>
            <Link to="/about" className="btn btn--primary about__card-btn">
              გაიგეთ მეტი
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container container--stats">
          <div className="stats">
            <StatCounter value="15+" label="წლიანი გამოცდილება" />
            <StatCounter value="200+" label="გლობალური პარტნიორი" />
            <StatCounter value="24/7" label="გლობალური მხარდაჭერა" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
