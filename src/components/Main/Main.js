import React from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio  from '../Portfolio/Portfolio';
import Techs from '../Techs/Techs';

function Main(props) {
  return (
    <main className="content">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;