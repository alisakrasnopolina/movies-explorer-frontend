import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from  'react-router-dom'; 

function Register(props) {
  return(
    <main className="content">
      <section className="register">
        <Link to="/" className="register__link-logo">
          <img src={logo} alt="Логотип" className="register__logo"/>
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <h3 className="register__input-name">Имя</h3>
          <input 
            // value={formValue.name}
            // onChange={handleChange}
            id="name-input" 
            name="name" 
            type="text" 
            placeholder="Name" 
            className="register__input register__input_data_name" 
            required 
            minLength="2" 
            maxLength="30"
          />
          <h3 className="register__input-name">E-mail</h3>
          <input 
            // value={formValue.email}
            // onChange={handleChange}
            id="email-input" 
            name="email" 
            type="text" 
            placeholder="Email" 
            className="register__input register__input_data_email" 
            required
            // minLength="2" 
            // maxLength="40"
          />
          <h3 className="register__input-name">Пароль</h3>
          <input 
            // value={formValue.password}
            // onChange={handleChange}
            id="password-input" 
            name="password" 
            type="password" 
            placeholder="Пароль" 
            className="register__input register__input_data_password" 
            required 
            // minLength="2" 
            // maxLength="200"
          />
          <button type="submit" className="register__submit-button">Зарегистрироваться</button>
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