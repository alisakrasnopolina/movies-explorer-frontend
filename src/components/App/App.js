import React, { useEffect, useCallback } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import Main from '../Main/Main';
import Layout from '../Layout/Layout';
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App(props) {

  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [apiError, setApiError] = React.useState('');
  const [isPreloaderActive, setPreloaderClass] = React.useState(true);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [successfulUpdate, setSuccessfulUpdate] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleTokenCheck = useCallback(async () => {
    const token = localStorage.getItem('Authorized');
    try {
      if (token) {
        const userData = await mainApi.getContent(token);
        if (userData) {
          setLoggedIn(true);
          setCurrentUser(userData);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setPreloaderClass(false);
    }
  }, []);

  useEffect(() => {
    handleTokenCheck();
  }, [loggedIn, handleTokenCheck]);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUser()
        .then((res) => {
          setCurrentUser(res)
        })
        .catch((err) => {console.log(err)});
      mainApi.getMovies()
        .then((res) => {
          localStorage.setItem('SavedMovies', JSON.stringify(res))
          setSavedMovies(JSON.parse(localStorage.getItem('SavedMovies')))
        })
        .catch((err) => {console.log(err)});
    }
  }, [loggedIn]);

  async function handleSearchMovies() {
    setLoading(true);
    setSearchError(false);
    try {
      const result = moviesApi.getInitialMovies()
      if (result) {
        return result
      }
    } catch (err) {
      setSearchError(true);
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${"https://api.nomoreparties.co" + movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `${"https://api.nomoreparties.co" + movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      })
      .then((newMovie) => {
        const movies = JSON.parse(localStorage.getItem('SavedMovies') || "[]")
        const newMovies = [...movies, newMovie]
        localStorage.setItem('SavedMovies', JSON.stringify(newMovies))
        setSavedMovies(JSON.parse(localStorage.getItem('SavedMovies')))
      })
      .catch((err) => {console.log(err)}); 
  }

  function handleDeleteMovie(movie) {
    const movies = JSON.parse(localStorage.getItem('SavedMovies'))
    const savedMovie = movies.find(
      (card) => card.movieId === movie.id || card.movieId === movie.movieId
    );
    mainApi.deleteMovie(savedMovie._id)
      .then(() => {
        const remainingMovies = movies.filter((card) => card._id !== savedMovie._id)
        localStorage.setItem('SavedMovies', JSON.stringify(remainingMovies))
        setSavedMovies(JSON.parse(localStorage.getItem('SavedMovies')))
      })
      .catch((err) => {console.log(err)}); 
  } 

  function handleSignOut() {
    mainApi.logout()
      .then((res) => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        navigate("/", {replace: true});
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleUpdateUser(name, email) {
    setLoading(true);
    mainApi.editProfile(name, email)
      .then((res) => {
        setCurrentUser(res)
        setSuccessfulUpdate(true)
        setApiError('')
      })
      .catch((err) => {
        setApiError(err)
        setSuccessfulUpdate(false)
        console.log()
        console.log(err)
      })
      .finally (() => {
        setLoading(false);
      });
  }

  function handleRegistration(name, email, password) {
    setLoading(true);
    mainApi.register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password)
          navigate("/movies", {replace: true})
          setApiError('')
        }
      })
      .catch((err, res) => {
        setApiError(err)
        console.log(err)
      })
      .finally (() => {
        setLoading(false);
      });
  }

  function handleLogin(email, password) {
    setLoading(true);
    mainApi.authorization(email, password)
      .then((data) => {
        setLoggedIn(true);
        navigate('/movies', {replace: true});
        setApiError('')
        }
      )
      .catch(err => {
        setApiError(err)
        console.log(err)
      })
      .finally (() => {
        setLoading(false);
      });
  }

  return (
    <div className="app__content">
      {isPreloaderActive ? (
        <Preloader />
      ) : (
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={
            <Layout loggedIn={loggedIn} />
          }>
            <Route index element={<Main />} />
            <Route path="/movies" element={
              <ProtectedRoute loggedIn={loggedIn} element={
                <Movies 
                  savedMovies={savedMovies}
                  searchError={searchError}
                  onSearch={handleSearchMovies}
                  isLoading={isLoading}
                  onMovieSave={handleSaveMovie}
                  onMovieDelete={handleDeleteMovie}
                />
              }/>
            }/>
            <Route path="/saved-movies" element={
              <ProtectedRoute loggedIn={loggedIn} element={
                <SavedMovies savedMovies={savedMovies} onMovieDelete={handleDeleteMovie}/>
              }/>
            }/>
            <Route path="/profile" element={
              <ProtectedRoute loggedIn={loggedIn} element={
                <Profile onLogOut={handleSignOut} onLoading={isLoading} onProfile={handleUpdateUser} apiError={apiError} onUpdate={successfulUpdate}/>
              }/>
            }/>
          </Route>
          <Route path="/sign-up" element={
            <Register onRegister={handleRegistration} onLoading={isLoading} apiError={apiError} loggedIn={loggedIn}/>
          }/>
          <Route path="/sign-in" element={
            <Login onLogin={handleLogin} onLoading={isLoading} apiError={apiError} loggedIn={loggedIn}/>
          }/>
          <Route path="/*" element={
            <NotFound />
          }/>
        </Routes>
      </CurrentUserContext.Provider>
    )}
    </div>
  );
}

export default App;
