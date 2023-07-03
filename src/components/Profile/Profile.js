import React, { useContext, useEffect } from 'react';
import './Profile.css';
import useFormWithValidation from '../Validation/Validation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { REGEX_NAME } from '../../utils/constants';

function Profile(props) {

  const currentUser = useContext(CurrentUserContext);

  const [successfulMessage, setSuccessfulMessage] = React.useState('')
  const [isCurrentUser, setUserDifference] = React.useState(true);
  const [isEditingBegun, setEditingStatus] = React.useState(false);

  const { formValues, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  useEffect(() => {
    currentUser.name !== formValues.name || currentUser.email !== formValues.email
      ? setUserDifference(false)
      : setUserDifference(true);
  }, [currentUser, formValues]);

  useEffect(() => {
    resetForm(currentUser, false);
    setSuccessfulMessage('')
  }, [resetForm, currentUser]);

  useEffect(() => {
    props.onUpdate
      ? setSuccessfulMessage('Ваша информация успешно обновлена.') 
      : setSuccessfulMessage('')
  }, [props.onUpdate])

  function handleEditClick() {
    setEditingStatus(!isEditingBegun);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onProfile(formValues.name, formValues.email)
  }

  return (
    <main className="content">
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} >
          <ul className="profile__input-list">
            <li className="profile__input-wrapper">
              <h3 className="profile__input-name">Имя</h3>
              <input 
                value={formValues.name || ""}
                onChange={handleChange}
                id="name-input" 
                name="name" 
                type="text" 
                placeholder="Имя" 
                pattern={REGEX_NAME}
                className="profile__input profile__input_data_name" 
                required 
                minLength="2" 
                maxLength="200"
                disabled={isEditingBegun ? false : true}
              />
            </li>
            <li className="profile__input-wrapper">
              <h3 className="profile__input-name">E-mail</h3>
              <input 
                value={formValues.email || ""}
                onChange={handleChange}
                id="email-input" 
                name="email" 
                type="text" 
                placeholder="Email" 
                className="profile__input profile__input_data_email" 
                required
                minLength="2" 
                maxLength="40"
                disabled={isEditingBegun ? false : true}
              />
            </li>
          </ul>
          <span className="profile__error" style={props.onUpdate ? {color: 'green'} : {color: '#FF004C'} }>{props.apiError || errors.email || errors.name || successfulMessage}</span>
          <button type="submit" className={isEditingBegun ? `profile__submit-button ${isValid && !isCurrentUser ? '' : 'profile__submit-button_type_disabled'}` : 'profile__submit-button profile__submit-button_type_hidden'} aria-label="кнопка сохранения информации профиля" disabled={isValid && !isCurrentUser ? false : true}>Сохранить</button>
        </form>
        <div className={isEditingBegun ? 'profile__buttons-wrapper profile__buttons-wrapper_type_hidden' : 'profile__buttons-wrapper'}>
          <button type="button" onClick={handleEditClick} className="profile__button profile__button_type_edit" aria-label="кнопка редактирования профиля" >Редактировать</button>
          <button className="profile__button profile__button_type_logout" onClick={props.onLogOut} aria-label="кнопка выхода из аккаунта" >Выйти из аккаунта</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;