import React from 'react';
import PropTypes from 'prop-types';

import './movie.scss';

const Movie = ({
  title,
  vote,
  poster,
  overview,
  release,
  language,
}) => (
  <div className="movie">
    <h1 className="movie__title">
      {title}
    </h1>
    <div className="movie__datas">
      <img className="movie__datas__img spacing" src={`https://image.tmdb.org/t/p/w200${poster}`} alt={`Poster for ${title}`} />
      <div className="movie__datas__details">
        <div className="movie__datas__details__language spacing">
          {`Original language: ${language}`}
        </div>
        <div className="movie__datas__details__release spacing">
          {`Release date: ${release}`}
        </div>
        <div className="movie__datas__details__vote spacing">
          {`Vote average: ${vote}`}
        </div>
      </div>
    </div>
    <div className="movie__overview spacing">
      {`Overview: ${overview}`}
    </div>
  </div>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number,
  poster: PropTypes.string,
  overview: PropTypes.string,
  release: PropTypes.string,
  language: PropTypes.string,
};

Movie.defaultProps = {
  language: 'Not found',
  release: 'Not found',
  poster: 'Not found',
  overview: 'Not found',
  vote: 'Not found',
};

export default Movie;
