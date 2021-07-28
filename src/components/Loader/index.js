import React from 'react';

import FilmReel from '../../assets/filmReel.svg';
import './loader.scss';

const Loader = () => (
  <div className="loader">
    <div className="loader__text">Loading...</div>
    <img className="loader__img" src={FilmReel} alt="loading animation" />
  </div>
);

export default Loader;
