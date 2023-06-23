import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <main className="content">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;