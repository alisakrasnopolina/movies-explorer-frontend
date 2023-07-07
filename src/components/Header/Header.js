import React, { useState } from 'react';
import { Link } from  'react-router-dom'; 
import './Header.css';
import logo from '../../images/logo.svg';
import AccountLogo from '../../images/logo-account.svg'
import Navigation from '../Navigation/Navigation';

function Header(props) {

  const[nav, setNav] = useState(false);

  function handleMenuClick() {
    setNav(!nav)
    if (!nav) {
      document.querySelector(':root').style.overflow = "hidden";
    } else {
      document.querySelector(':root').style.overflow = "auto";
    }
  }

  return (
    <header className="header" style={(props.loggedIn) ? {backgroundColor: "#FFF"} : {backgroundColor: "#F3C1F8"}}>
      <Link to="/" className="header__link-logo">
        <img src={logo} alt="Логотип" className="header__logo"/>
      </Link>
      { (props.loggedIn) ? 
      <>
        <Navigation nav={nav}/>
        <Link to="/profile" className={nav ? "header__link-account header__link-account_type_opened " : "header__link-account"}>
          <img src={AccountLogo} alt="Логотип" className="header__logo-account"/>Аккаунт
        </Link>
        {nav ? 
        <div onClick={handleMenuClick} className="header__burger header__burger_type_close">
          <span className="header__span header__span_type_close"></span>
        </div>
        :
        <div onClick={handleMenuClick} className="header__burger header__burger_type_open">
          <span className="header__span header__span_type_open"></span>
        </div>
        }
      </>
      :
      <div className="header__menu"> 
      <Link to="/sign-up" className="header__link-registration">
        Регистрация
      </Link>
      <Link to="/sign-in" className="header__link-login">
        Войти
      </Link>
      </div>
      }
    </header>
  );
}

export default Header;