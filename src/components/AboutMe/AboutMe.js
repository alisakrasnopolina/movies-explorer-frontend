import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <span className="about-me__line"></span>
      <div className="about-me__biography">
        <div className="about-me__description">
          <h3 className="about-me__name">Майкл Скотт</h3>
          <p className="about-me__subtitle">Pегиональный менеджер, 58 лет</p>
          <p className="about-me__paragraph">Я родился и живу в Скрантоне, штат Пенсильвания. Я региональный менеджер филиала компании по поставке офисной бумаги «Дандер Миффлин». Коллеги - моя семья.</p>
          <a href="https://github.com/alisakrasnopolina" target="_blank" rel="noreferrer" className="about-me__link">
            Github
          </a>
        </div>
        <div className="about-me__picture"></div>
      </div>
    </section>
  );
}

export default AboutMe;