import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import MoviesThumbnail from '../../containers/MoviesThumbnail';

const Movies = ({
  loading,
  searchedList,
}) => (
  <div>
    {loading && <Loader />}
    {!loading && (
      <>
        {searchedList.length === 0 && (
          <div>No movies matches your search</div>
        )}
        {searchedList.length > 0 && (
          searchedList.map((movie) => (
            <MoviesThumbnail {...movie} key={movie.id} movie={movie} />
          ))
        )}
      </>
    )}
  </div>
);

Movies.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchedList: PropTypes.array.isRequired,
};

export default Movies;
