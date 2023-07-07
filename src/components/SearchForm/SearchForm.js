import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  const [searchName, setSearchName] = React.useState('');
  const [searchError, setSearchError] = React.useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      setSearchName(localStorage.getItem("moviesSearchName"))
    }
  }, [])

  const handleChange = (evt) => {
    setSearchName(evt.target.value)
  }

  useEffect(() => {
    setSearchError("");
  }, [searchName]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (location.pathname === "/movies") {
      (searchName)
        ? props.onSubmit(searchName)
        : setSearchError("Нужно ввести ключевое слово");
    } else {
      props.onSubmit(searchName);
    }
  }

  return (
    <section className="search-form">
      <form className="search-form__search" onSubmit={handleSubmit} noValidate>
        <input
          value={searchName || ""}
          onChange={handleChange}
          id="movie-input" 
          name="movie" 
          type="text" 
          placeholder="Фильм" 
          className="search-form__input" 
          required 
        />
        <button className="search-form__button">Найти</button>
      </form>
      <span className="search-form__error">{searchError}</span>
      <FilterCheckbox isSearching={props.isSearching} isFilterOn={props.isFilterOn} onFilterChange={props.onFilterChange} />
      <span className="search-form__line"></span>
    </section>
  );
}

export default SearchForm;