import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom'; 

function NotFound(props) {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <h3 className="not-found__subtitle">Страница не найдена</h3>
      <Link to="/" className="not-found__link">Назад</Link>
    </section>
  );
}

export default NotFound;