import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Genre = ({ name, id, saveGenreChoice }) => {
  const handleClick = () => {
    saveGenreChoice(id);
  };
  return (
    <Link
      to={`/${name}`}
      onClick={handleClick}
    >
      {name}
    </Link>
  );
};

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  saveGenreChoice: PropTypes.func.isRequired,
};

export default Genre;
