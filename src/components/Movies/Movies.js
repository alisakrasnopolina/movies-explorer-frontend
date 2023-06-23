import React from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';

function Movies(props) {
  return (
    <main className="content">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      <Pagination />
    </main>
  );
}

export default Movies;