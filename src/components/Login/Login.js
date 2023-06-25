import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from  'react-router-dom'; 
// import { useNavigate } from  'react-router-dom';

function Login(props) {
  return(
    <main className="content">
      <section className="login">
        <Link to="/" className="login__link-logo">
          <img src={logo} alt="Логотип" className="login__logo"/>
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
        <h3 className="login__input-name">E-mail</h3>
          <input 
            // value={formValue.email}
            // onChange={handleChange}
            id="email-input" 
            name="email" 
            type="text" 
            placeholder="Email" 
            className="login__input login__input_data_email" 
            required
            // minLength="2" 
            // maxLength="40"
          />
          <h3 className="login__input-name">Пароль</h3>
          <input 
            // value={formValue.password}
            // onChange={handleChange}
            id="password-input" 
            name="password" 
            type="password" 
            placeholder="Пароль" 
            className="login__input login__input_data_password" 
            required 
            // minLength="2" 
            // maxLength="200"
          />
          <button type="submit" className="login__submit-button" aria-label="кнопка входа в аккаунт">Войти</button>
          <div className="login__subtitles">
            <p className="login__subtitle login__subtitle_type_name">Ещё не зарегистрированы?</p>
            <Link to="/sign-up" className="login__subtitle login__subtitle_type_link">
              Регистрация
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;