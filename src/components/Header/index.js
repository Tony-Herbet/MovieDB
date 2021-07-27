import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import SearchBar from '../../containers/Header/SearchBar';

const Header = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  const handleGoForward = () => {
    history.goForward();
  };
  return (
    <header>
      <nav>
        <Link
          to="/"
        >
          MovieDB Project
        </Link>
        <button type="button" onClick={handleGoBack}>
          go back
        </button>
        <button type="button" onClick={handleGoForward}>
          go forward
        </button>
      </nav>
      <SearchBar />
    </header>
  );
};

export default Header;
