import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__label filter-checkbox__label_type_checkbox">
        <input type="checkbox" className="filter-checkbox__checkbox" />
        <span className="filter-checkbox__wrapper-checkbox">
          <span className="filter-checkbox__circle-checkbox"></span>
        </span>
        <p className="filter-checkbox__title">Короткометражки</p>
      </label>
    </section>
  );
}

export default FilterCheckbox;