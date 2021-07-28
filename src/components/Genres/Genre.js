import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Sub-component use to display each genre
const Genre = ({ name, id, saveGenreChoice }) => {
  const handleClick = () => {
    saveGenreChoice(id);
  };
  return (
    <Link
      to={`/Genre/${name}`}
      onClick={handleClick}
      className="genres__list__genre"
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
