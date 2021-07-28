import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Genre from '../../containers/Genres/Genre';
import Loader from '../Loader';

import './genres.scss';

// Component that serve as a homepage and list all the movies genres
const Genres = ({ fetchGenres, list, loading }) => {
  useEffect(() => {
  // API request for all the movies genres
    fetchGenres();
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="genres">
          <h1 className="genres__title">Movie Genres</h1>
          <div className="genres__list">
            {list.map((genre) => (
              <Genre key={genre.id} name={genre.name} id={genre.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

Genres.propTypes = {
  fetchGenres: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Genres;
