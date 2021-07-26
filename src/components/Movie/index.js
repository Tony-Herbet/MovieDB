import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({
  title,
  vote,
  poster,
  overview,
  release,
  language,
}) => (
  <div>
    <p>{title}</p>
    <p>{vote}</p>
    <p>{overview}</p>
    <p>{release}</p>
    <p>{language}</p>
    <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt={`Poster for ${title}`} />
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
