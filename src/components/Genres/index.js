import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Genre from '../../containers/Genres/Genre';
import Loader from '../Loader';

import './genres.scss';

const Genres = ({ fetchGenres, list, loading }) => {
  useEffect(() => {
    fetchGenres();
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          {list.map((genre) => (
            <Genre {...genre} key={genre.id} />
          ))}
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
