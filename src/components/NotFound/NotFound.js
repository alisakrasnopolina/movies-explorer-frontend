import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'; 

function NotFound(props) {

  const navigate = useNavigate();

  // function handleBtnBackClick() {
  //   if (window.history.state && window.history.state.idx > 0) {
  //     navigate(-1);
  //   } else {
  //     navigate("/", { replace: true });
  //   }
  // }

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <h3 className="not-found__subtitle">Страница не найдена</h3>
      <button type="button" onClick={() => navigate(-1)} className="not-found__link">Назад</button>
    </section>
  );
}

export default NotFound;