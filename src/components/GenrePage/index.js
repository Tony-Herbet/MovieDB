import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import MoviesThumbnail from '../../containers/MoviesThumbnail';

import './genrePage.scss';

const GenrePage = ({
  loading,
  fetchGenreMoviesList,
  choiceId,
  displayLoader,
  moviesList,
}) => {
  useEffect(() => {
    displayLoader();
    fetchGenreMoviesList(choiceId);
  }, []);
  const { slug } = useParams();
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="genrePage">
          <h1 className="genrePage__title">
            {`${slug} movies`}
          </h1>
          {moviesList.map((movie) => (
            <MoviesThumbnail {...movie} key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

GenrePage.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchGenreMoviesList: PropTypes.func.isRequired,
  choiceId: PropTypes.number.isRequired,
  displayLoader: PropTypes.func.isRequired,
  moviesList: PropTypes.array.isRequired,
};

export default GenrePage;
