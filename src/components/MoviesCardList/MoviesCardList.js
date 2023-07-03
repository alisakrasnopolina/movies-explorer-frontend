import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import Pagination from '../Pagination/Pagination';

function MoviesCardList(props) {

  const [moviesForList, setMoviesForList] = useState([]);
  const [moviesCardsParams, setMoviesCardsParams] = React.useState({});

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies" && props.movies.length) {
      const result = props.movies.filter((card, index) => {
        return index < moviesCardsParams.current;
      });
      setMoviesForList(result);
    }
  }, [location.pathname, props.movies, moviesCardsParams]);

  useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setMoviesForList(props.movies);
    }
  }, [location.pathname, props.movies]);

  useEffect(() => {
    handleResize()
  }, [])

  function handleResize() {
    if (window.innerWidth >= 1280) {
      setMoviesCardsParams({
        current: 16,
        more: 4,
      },);
    } else if (window.innerWidth < 1280 && window.innerWidth >= 1024) {
      setMoviesCardsParams({
        current: 12,
        more: 3,
      });
    } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      setMoviesCardsParams({
        current: 8,
        more: 2,
      });
    } else {
      setMoviesCardsParams({
        current: 5,
        more: 2,
      });
    }
  }

  function handleTiming(func) {
    let timer

    return function(event) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(func, 100, event);
    };
  }

  window.addEventListener("resize", handleTiming(function(e) {
    handleResize()
  }));

  window.removeEventListener("resize", handleTiming(function(e) {
    handleResize()
  }));

  function handleClickOnMoreButton() {
    const start = moviesForList.length;
    const end = start + moviesCardsParams.more;
    if (props.movies.length - start > 0) {
      const additionalCards = props.movies.slice(start, end);
      setMoviesForList([...moviesForList, ...additionalCards]);
    }
  }

  function handleSavedStatus(movie) {
    return props.savedMovies.find((card) => {
      return card.movieId === (movie.id || movie.movieId);
    });
  }

  return (
    <section className="movies-card-list">
      {props.isLoading && props.movies.length === 0 && <Preloader />}
      {props.moviesNotFound  && ( <p className="movies-card-list__notification">Ничего не&nbsp;найдено</p> )}
      {props.searchError && ( 
        <p className="movies-card-list__notification">
          Во&nbsp;время запроса произошла ошибка. Возможно, проблема
          с&nbsp;соединением или сервер недоступен. Подождите немного
          и&nbsp;попробуйте ещё раз.
        </p> 
      )}
      {props.movies.length !== 0 && !props.searchError && (
      <>
        <ul className="movies-card-list__list">
          {moviesForList.map((movie, i) => (
            <MoviesCard movie={movie} key={movie.id || movie._id} onMovieSave={props.onMovieSave} onMovieDelete={props.onMovieDelete} isSaved={handleSavedStatus(movie) || false} />
          ))}
        </ul>
        {moviesForList.length < props.movies.length && (<Pagination clickOnMoreButton={handleClickOnMoreButton} />)}
      </>
      )}
    </section>
  );
}

export default MoviesCardList;