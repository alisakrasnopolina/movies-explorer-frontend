import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs" id='techs'>
      <h2 className="techs__title">Технологии</h2>
      <span className="techs__line"></span>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__list-element"><p className="techs__list-element-text">HTML</p></li>
        <li className="techs__list-element"><p className="techs__list-element-text">CSS</p></li>
        <li className="techs__list-element"><p className="techs__list-element-text">JS</p></li>
        <li className="techs__list-element"><p className="techs__list-element-text">React</p></li>
        <li className="techs__list-element"><p className="techs__list-element-text">Git</p></li>
        <li className="techs__list-element"><p className="techs__list-element-text">Express.js</p></li>
        <li className="techs__list-element"><p className="techs__list-element-text">mongoDB</p></li>
      </ul>
    </section>
  );
}

export default Techs;