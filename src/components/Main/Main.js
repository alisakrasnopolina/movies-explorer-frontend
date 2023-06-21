import React from 'react';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio  from '../Portfolio/Portfolio';
import Techs from '../Techs/Techs';
import Footer from '../Footer/Footer';

function Main(props) {
  return (
    <main className="content">
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Main;