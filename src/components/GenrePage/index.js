import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import Movies from '../../containers/GenrePage/Movies';

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
  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <>
          {moviesList.map((movie) => (
            <Movies {...movie} key={movie.title} movie={movie} />
          ))}
        </>
      )}
    </div>
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
