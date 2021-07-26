import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({
  value,
  updateSearchBarValue,
  searchMovie,
  displayLoader,
}) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    updateSearchBarValue(inputValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    displayLoader();
    searchMovie(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  updateSearchBarValue: PropTypes.func.isRequired,
  searchMovie: PropTypes.func.isRequired,
  displayLoader: PropTypes.func.isRequired,
};

export default SearchBar;
