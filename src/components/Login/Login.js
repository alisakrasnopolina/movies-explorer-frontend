import React from 'react';
import { Link, Navigate } from "react-router-dom";
import './Login.css';
import logo from '../../images/logo.svg';
import useFormWithValidation from '../Validation/Validation'

function Login(props) {
  
  const { formValues, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onLogin(formValues.email, formValues.password)
    resetForm();
  }

  return props.loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <main className="content">
      <section className="login">
        <Link to="/" className="login__link-logo">
          <img src={logo} alt="Логотип" className="login__logo"/>
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <h3 className="login__input-name">E-mail</h3>
          <input 
            value={formValues.email || ''}
            onChange={handleChange}
            id="email-input" 
            name="email" 
            type="email" 
            placeholder="Email" 
            className={(errors.email === '') ? "login__input login__input_data_email" : "login__input login__input_type_error"}  
            required
            minLength="2" 
            maxLength="40"
          />
          <span className="login__error-message">{errors.email || ''}</span>
          <h3 className="login__input-name">Пароль</h3>
          <input 
            value={formValues.password || ''}
            onChange={handleChange}
            id="password-input" 
            name="password" 
            type="password" 
            placeholder="Пароль" 
            className={(errors.password === '') ? "login__input login__input_data_password" : "login__input login__input_type_error"}
            required 
            minLength="2" 
            maxLength="200"
          />
          <span className="login__error-message">{errors.password || ''}</span>
          <span className="login__error">{props.apiError}</span>
          <button type="submit" className={isValid ? "login__submit-button" : "login__submit-button login__submit-button_type_disabled"} disabled={!isValid} aria-label="кнопка входа в аккаунт">Войти</button>
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