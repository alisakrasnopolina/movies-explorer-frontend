import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
// import ProtectedRoute from './ProtectedRoute';
// import * as Auth from '../utils/Auth';
// import api from '../utils/Api';
// import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App(props) {
  return (
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }/>
        <Route path="/movies" element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        }/>
        <Route path="/saved-movies" element={
          <>
            <Header />
            <SavedMovies />
            <Footer />
          </>
        }/>
        <Route path="/profile" element={
          <>
            <Header />
            <Profile />
          </>
        }/>
        <Route path="/sign-up" element={
          <Register />
        }/>
        <Route path="/sign-in" element={
          <Login />
        }/>
        <Route path="*" element={
          <NotFound />
        }/>
      </Routes>
  );
}

export default App;
