import React from 'react';
import Header from '../Header/Header';
import './Profile.css';
// import { Link } from  'react-router-dom'; 


function Profile(props) {
  return (
    <main className="content">
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form" >
          <ul className="profile__input-list">
            <li className="profile__input-wrapper">
              <h3 className="profile__input-name">Имя</h3>
              <input 
                // value={formValue.name}
                // onChange={handleChange}
                id="name-input" 
                name="name" 
                type="text" 
                placeholder="Имя" 
                className="profile__input profile__input_data_name" 
                required 
                // minLength="2" 
                // maxLength="200"
              />
            </li>
            <li className="profile__input-wrapper">
              <h3 className="profile__input-name">E-mail</h3>
              <input 
                // value={formValue.email}
                // onChange={handleChange}
                id="email-input" 
                name="email" 
                type="text" 
                placeholder="Email" 
                className="profile__input profile__input_data_email" 
                required
                // minLength="2" 
                // maxLength="40"
              />
            </li>
          </ul>
          <button type="submit" className="profile__button profile__button_type_submit" aria-label="кнопка редактирования профиля" >Редактировать</button>
        </form>
        <button className="profile__button profile__button_type_logout" aria-label="кнопка выхода из аккаунта" >Выйти из аккаунта</button>
      </section>
    </main>
  );
}

export default Profile;