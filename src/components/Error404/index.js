import React from 'react';

import ConfusedTravolta from '../../assets/confusedtravolta.jpg';
import './error404.scss';

// Component use when url is not valid
const Error404 = () => (
  <div className="error404">
    <h1 className="error404__title">
      404 NOT FOUND
    </h1>
    <img
      src={ConfusedTravolta}
      alt="Confused Travolta as background"
      className="error404__img"
    />
  </div>
);

export default Error404;
