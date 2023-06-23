import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import cards from '../../utils/array_movies'

function MoviesCardList(props) {
  return (
    <div className="movies-card-list">
      {cards.map((card, i) => (
          <MoviesCard card={card} key={card._id} />
      ))}
    </div>
  );
}

export default MoviesCardList;