import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <span className="footer__line"></span>
      <div className="footer__menu">
        <h2 className="footer__date">&copy;&nbsp;2023</h2>
        <ul className='footer__links-list'>
          <li className='footer__link-list'>
            <a href="https://practicum.yandex.ru" target="_blank" rel="noreferrer" className="footer__link">
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__link-list'>
            <a href="https://github.com/alisakrasnopolina" target="_blank" rel="noreferrer" className="footer__link">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;