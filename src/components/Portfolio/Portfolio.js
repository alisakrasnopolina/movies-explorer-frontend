import React from 'react';
import './Portfolio.css';
// import { Link } from  'react-router-dom'; 

function Portfolio() {
return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links-list">
        <li className="portfolio__link-list">
          <a href="https://github.com/alisakrasnopolina" target="_blank" rel="noreferrer" className="portfolio__link">
            Статичный сайт
          </a>
          <span className='portfolio__arrow'>↗</span>
        </li>
        <li className="portfolio__link-list">
          <a href="https://github.com/alisakrasnopolina" target="_blank" rel="noreferrer" className="portfolio__link">
            Адаптивный сайт
          </a>
          <span className='portfolio__arrow'>↗</span>
        </li>
        <li className="portfolio__link-list">
          <a href="https://github.com/alisakrasnopolina" target="_blank" rel="noreferrer" className="portfolio__link">
            Одностраничное приложение
          </a>
          <span className='portfolio__arrow'>↗</span>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;