import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';

import './genres.scss';

const Genres = ({ fetchGenres, list }) => {
  useEffect(() => {
    fetchGenres();
  }, []);
  return (
    <div>
      {list.map((genre) => (
        <Genre {...genre} key={genre.id} />
      ))}
    </div>
  );
};

Genres.propTypes = {
  fetchGenres: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

export default Genres;
