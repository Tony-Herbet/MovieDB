import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBar = ({
  value,
  updateSearchBarValue,
  searchMovie,
  displayLoader,
  redirect,
  redirectOn,
  savePreviousSearch,
}) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    updateSearchBarValue(inputValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    displayLoader();
    searchMovie(value);
    savePreviousSearch(value);
    redirectOn();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
      </form>
      {redirect && (
        <Redirect to="/Movies" />
      )}
    </>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  updateSearchBarValue: PropTypes.func.isRequired,
  searchMovie: PropTypes.func.isRequired,
  displayLoader: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
  redirectOn: PropTypes.func.isRequired,
  savePreviousSearch: PropTypes.func.isRequired,
};

export default SearchBar;
