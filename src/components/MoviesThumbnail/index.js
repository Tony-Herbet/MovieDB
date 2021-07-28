/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './moviesThumbnail.scss';

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
      className="movieThumbnail"
    >
      <div className="movieThumbnail__datas">
        <div className="movieThumbnail__datas__title">{title}</div>
        <img className="movieThumbnail__datas__poster" src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`Poster for ${title}`} />
        <div className="movieThumbnail__datas__language">
          {`Original language : ${original_language}`}
        </div>
        <div className="movieThumbnail__datas__release">
          {`Release date : ${release_date}`}
        </div>
        <div className="movieThumbnail__datas__vote">
          {`Vote average : ${vote_average}`}
        </div>
      </div>
    </Link>
  );
};

Movies.propTypes = {
  title: PropTypes.string.isRequired,
  original_language: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number.isRequired,
  movie: PropTypes.object.isRequired,
  saveMovieChoice: PropTypes.func.isRequired,
};

Movies.defaultProps = {
  release_date: '',
  poster_path: '',
};

export default Movies;
