import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
// import ProtectedRoute from './ProtectedRoute';
// import * as Auth from '../utils/Auth';
// import api from '../utils/Api';
// import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App(props) {
  return (
      <Routes>
        <Route path="/" element={
          <Main />
        }/>
        <Route path="/movies" element={
          <Movies />
        }/>
        <Route path="/saved-movies" element={
          <SavedMovies />
        }/>
        <Route path="/profile" element={
          <Profile />
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
