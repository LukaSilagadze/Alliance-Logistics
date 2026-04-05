import React from 'react';
import { Link } from 'react-router-dom';
import StatCounter from '../components/StatCounter';
import './about.css'; // importing about specific css

const About = () => {
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
          <h1 className="hero-banner__title">ჩვენს შესახებ</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container about-content__container">
          <div className="about-content__inner">
            <div className="about-content__text-section">
              <h2 className="about-content__title">ჩვენს შესახებ</h2>
              <p className="about-content__text">
                კომპანია „ალიანს ლოჯისტიკი“ საქართველოს ბაზარზე წარმოდგენილია
                2011 წლიდან, როგორც საერთაშორისო გადამზიდავი ფორვარდერი
                კომპანია. კომპანია ორიენტირებულია მომხმარებლებისთვის მაღალი
                ხარისხის მომსახურების მიწოდებაზე, რომელსაც უზრუნველყობს
                გამოცდილი გუნდი.
              </p>
              <p className="about-content__text">
                ჩვენი კომპანია ახორციელებს ნებისმიერი სახის თუ ზომის ტვირთების
                გადაზიდვას სახმელეთო, საჰაერო, სარკინიგზო და საზღვაო გზით. ჩვენი
                სანდო პარტნიორების ჩართულობით მოკლე დროში და კონკურენტულ ფასებში
                ვუზრუნველვყოფთ მცირე თუ დიდი პროექტების შესრულებას.
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
                კომპანიისთვის მნიშვნელოვანია, დამკვეთის მინიმალური ჩართულობით,
                დროულად განახლებული სტატუსებით, მაქსიმალურად მოკლე დროში მოხდეს
                პროდუქციის დანიშნულების ადგილზე მიწოდება.
              </p>
              <p className="about-content__text">
                კომპანიის მიზანია მუდმივი განახლება როგორც მიმართულებების, ასევე
                კონტროლი და გაუმჯობესება გადაზიდვის ტარიფების თუ ტრანზიტული
                ვადების.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats">
            <StatCounter value="15+" label="წლიანი გამოცდილება" />
            <StatCounter value="200+" label="გლობალური პარტნიორი" />
            <StatCounter value="24/7" label="აქტიური მხარდაჭერა" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
