import React from 'react';
import './NavTab.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {
  return (
    <section className="nav-tab">
      <nav>
        <ul className='nav-tab__links-list'>
          <li className='nav-tab__link-list'>
            <Link to="/#about-project" className="nav-tab__link">
              О проекте
            </Link>
          </li>
          <li className='nav-tab__link-list'>
            <Link to="/#techs" className="nav-tab__link">
              Технологии
            </Link>
          </li>
          <li className='nav-tab__link-list'>
            <Link to="/#about-me" className="nav-tab__link">
              Студент
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;