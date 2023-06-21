import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  return (
    <section className="search-form">
      <div className="search-form__search">
        <input
          // value={formValue.password}
          // onChange={handleChange}
          id="movie-input" 
          name="movie" 
          type="movie" 
          placeholder="Фильм" 
          className="search-form__input" 
          required 
          // minLength="2" 
          // maxLength="200"
        />
        <button className="search-form__button">Найти</button>
      </div>
      <FilterCheckbox />
      <span className="search-form__line"></span>
    </section>
  );
}

export default SearchForm;