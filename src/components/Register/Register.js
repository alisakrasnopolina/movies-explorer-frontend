import React from 'react';
import { Navigate, Link  } from "react-router-dom";
import './Register.css';
import logo from '../../images/logo.svg';
import useFormWithValidation from '../Validation/Validation';
import { REGEX_NAME } from '../../utils/constants';

function Register(props) {

  const { formValues, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onRegister(formValues.name, formValues.email, formValues.password)
  }

  return props.loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <main className="content">
      <section className="register">
        <Link to="/" className="register__link-logo">
          <img src={logo} alt="Логотип" className="register__logo"/>
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          <h3 className="register__input-name">Имя</h3>
          <input 
            value={formValues.name || ''}
            onChange={handleChange}
            id="name-input" 
            name="name" 
            type="text" 
            placeholder="Name" 
            pattern={REGEX_NAME}
            className={(errors.name === '') ? "register__input register__input_data_name" : "register__input register__input_type_error"}
            required 
            minLength="2" 
            maxLength="30"
          />
          <span className="register__error-message">{errors.name || ''}</span>
          <h3 className="register__input-name">E-mail</h3>
          <input 
            value={formValues.email || ''}
            onChange={handleChange}
            id="email-input" 
            name="email" 
            type="email" 
            placeholder="Email" 
            className={(errors.email === '') ? "register__input register__input_data_email" : "register__input register__input_type_error"} 
            required
            minLength="2" 
            maxLength="40"
          />
          <span className="register__error-message">{errors.email || ''}</span>
          <h3 className="register__input-name">Пароль</h3>
          <input 
            value={formValues.password || ''}
            onChange={handleChange}
            id="password-input" 
            name="password" 
            type="password" 
            placeholder="Пароль" 
            className={(errors.password === '') ? "register__input register__input_data_password" : "register__input register__input_type_error"}
            required 
            minLength="2" 
            maxLength="200"
          />
          <span className="register__error-message">{errors.password || ''}</span>
          <span className="register__error">{props.apiError}</span>
          <button type="submit" className={isValid ? "register__submit-button" : "register__submit-button register__submit-button_type_disabled"} disabled={!isValid}>Зарегистрироваться</button>
          <div className="register__subtitles">
            <p className="register__subtitle register__subtitle_type_name">Уже зарегистрированы?</p>
            <Link to="/sign-in" className="register__subtitle register__subtitle_type_link">
              Войти
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Register;