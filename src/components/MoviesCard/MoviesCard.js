import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {

  let location = useLocation();

  function handleSaveMovie() {
    props.onMovieSave(props.movie)
  }

  function handleDeleteMovie() {
    props.onMovieDelete(props.movie)
  }

  function convertDuration(duration) {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;
    if (hours < 1) {
      return `${minutes}м`;
    } else {
      return `${hours}ч${minutes}м`;
    }
  }

  return (
    <section className="movies-card">
      <a className="movies-card__link" href={props.movie.trailerLink} target="_blank" rel="noreferrer">
        <div className="movies-card__pic" style={location.pathname === "/movies" ? {backgroundImage: `url(${"https://api.nomoreparties.co" + props.movie.image.url})`} : {backgroundImage: `url(${props.movie.image})`}} ></div>
      </a>
      <div className="movies-card__description">
        <div className="movies-card__info">
          <p className="movies-card__name">{props.movie.nameRU}</p>
          <p className="movies-card__duration">{convertDuration(props.movie.duration)}</p>
        </div>
        { (location.pathname === "/saved-movies") ? 
        <button className="movies-card__delete-button" onClick={handleDeleteMovie}></button>
        :
        <label className="movies-card__label movies-card__label_type_checkbox">
          <input type="checkbox" className="movies-card__checkbox" onChange={props.isSaved ? handleDeleteMovie : handleSaveMovie} checked={props.isSaved}/>
          <span className="movies-card__wrapper-checkbox">
            <span className="movies-card__circle-checkbox"></span>
          </span>
        </label>
        }
      </div>
    </section>
  );
}

export default MoviesCard;