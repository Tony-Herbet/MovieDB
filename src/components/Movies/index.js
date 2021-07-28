import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import MoviesThumbnail from '../../containers/MoviesThumbnail';

import './movies.scss';

const Movies = ({
  loading,
  searchedList,
  previousSearch,
}) => (
  <div>
    {loading && <Loader />}
    {!loading && (
      <div className="movies">
        <h1 className="movies__title">
          {`Movies matching : "${previousSearch}"`}
        </h1>
        {searchedList.length === 0 && (
          <div className="movies__error">
            No movies matches your search
          </div>
        )}
        <div className="movies__list">
          {searchedList.length > 0 && (
            searchedList.map((movie) => (
              <MoviesThumbnail {...movie} key={movie.id} movie={movie} />
            ))
          )}
        </div>
      </div>
    )}
  </div>
);

Movies.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchedList: PropTypes.array.isRequired,
  previousSearch: PropTypes.string.isRequired,
};

export default Movies;
