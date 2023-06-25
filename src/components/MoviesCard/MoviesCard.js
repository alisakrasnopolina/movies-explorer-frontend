import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {

  let location = useLocation();

  return (
    <div className="movies-card">
      <div className="movies-card__pic" style={{ backgroundImage: `url(${props.card.link})` }} ></div>
      <div className="movies-card__description">
        <div className="movies-card__info">
          <p className="movies-card__name">{props.card.name}</p>
          <p className="movies-card__duration">{props.card.duration}</p>
        </div>
        { (location.pathname === "/saved-movies") ? 
        <button className="movies-card__delete-button"></button>
        :
        <label className="movies-card__label movies-card__label_type_checkbox">
          <input type="checkbox" className="movies-card__checkbox"/>
          <span className="movies-card__wrapper-checkbox">
            <span className="movies-card__circle-checkbox"></span>
          </span>
        </label>
        }
      </div>
    </div>
  );
}

export default MoviesCard;