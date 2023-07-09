import React from 'react';
import './Pagination.css';

function Pagination(props) {
  return (
    <div className="pagination">
      <button className="pagination__button" type='button' onClick={props.clickOnMoreButton}>Ещё</button>
    </div>
  );
}

export default Pagination;