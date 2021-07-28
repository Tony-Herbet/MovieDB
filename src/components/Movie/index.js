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
    <img className="movie__language spacing" src={`https://image.tmdb.org/t/p/w200${poster}`} alt={`Poster for ${title}`} />
    <div className="movie__language spacing">
      {`Original language : ${language}`}
    </div>
    <div className="movie__release spacing">
      {`Release date : ${release}`}
    </div>
    <div className="movie__vote spacing">
      {`Vote average : ${vote}`}
    </div>
    <div className="movie__overview spacing">
      {`Overview : ${overview}`}
    </div>
  </div>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Movie;
