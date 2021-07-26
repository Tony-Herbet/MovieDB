/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movies = ({
  title,
  original_language,
  release_date,
  poster_path,
  vote_average,
  movie,
  saveMovieChoice,
}) => {
  const handleClick = () => {
    saveMovieChoice(movie);
  };
  return (
    <Link
      to={`/Movie/${title}`}
      onClick={handleClick}
    >
      <p>{title}</p>
      <p>{original_language}</p>
      <p>{release_date}</p>
      <p>
        Score:
        {vote_average}
        /10
      </p>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`Poster for ${title}`} />
    </Link>
  );
};

Movies.propTypes = {
  title: PropTypes.string.isRequired,
  original_language: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  movie: PropTypes.object.isRequired,
  saveMovieChoice: PropTypes.func.isRequired,
};

Movies.defaultProps = {
  release_date: '',
};

export default Movies;
