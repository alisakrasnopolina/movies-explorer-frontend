import React from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer';

function Movies(props) {
  return (
    <main className="content">
      <Header />
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      <Pagination />
      <Footer />
    </main>
  );
}

export default Movies;