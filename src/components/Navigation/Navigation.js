import React from 'react';
import './Navigation.css';
import { Link, useLocation } from  'react-router-dom'; 

function Navigation(props) {

  let location = useLocation();

  return (
    <ul className={props.nav ? "navigation navigation_type_opened" : "navigation"} >
      <li className="navigation__link-list navigation__link-list_type_main">
        <Link to="/" className="navigation__link navigation__link_type_main">
          <p className={(location.pathname === "/") ? "navigation__link-name navigation__link-name_type_active"  : "navigation__link-name"}>Главная</p>
        </Link>
      </li>
      <li className="navigation__link-list">
        <Link to="/movies" className="navigation__link">
          <p className={(location.pathname === "/movies") ? "navigation__link-name navigation__link-name_type_active"  : "navigation__link-name"}>Фильмы</p>
        </Link>
      </li>
      <li className="navigation__link-list">
        <Link to="/saved-movies" className="navigation__link">
          <p className={(location.pathname === "/saved-movies") ? "navigation__link-name navigation__link-name_type_active"  : "navigation__link-name"}>Сохранённые фильмы</p>
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;