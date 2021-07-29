import React from 'react';

import FilmReel from 'src/assets/filmReel.svg';
import './loader.scss';

// Component is display when we make an API request to wait for the response
const Loader = () => (
  <div className="loader">
    <div className="loader__text">Loading...</div>
    <img className="loader__img" src={FilmReel} alt="loading animation" />
  </div>
);

export default Loader;
