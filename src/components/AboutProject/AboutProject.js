import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <span className="about-project__line"></span>
      <div className="about-project__description">
        <div className="about-project__paragraph">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__paragraph">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__graph">
        <div className="about-project__part about-project__part_type_black">
          <span className="about-project__rectangle about-project__rectangle_type_black">1 неделя</span>
          <p className="about-project__comment">Back-end</p>
        </div>
        <div className="about-project__part about-project__part_type_grey">
          <span className="about-project__rectangle about-project__rectangle_type_grey">4 неделя</span>
          <p className="about-project__comment">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;