import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  return (
    <div className="search-form">
      <form className="search-form__search">
        <input
          // value={formValue.password}
          // onChange={handleChange}
          id="movie-input" 
          name="movie" 
          type="text" 
          placeholder="Фильм" 
          className="search-form__input" 
          required 
          // minLength="2" 
          // maxLength="200"
        />
        <button className="search-form__button">Найти</button>
      </form>
      <FilterCheckbox />
      <span className="search-form__line"></span>
    </div>
  );
}

export default SearchForm;