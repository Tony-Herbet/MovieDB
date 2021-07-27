import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import SearchBar from '../../containers/Header/SearchBar';

import './header.scss';

const Header = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  const handleGoForward = () => {
    history.goForward();
  };
  return (
    <header className="header">
      <nav className="header__nav">
        <Link
          to="/"
          className="header__nav--link header__nav--title"
        >
          MovieDB Project
        </Link>
        <button type="button" className="header__nav--link" onClick={handleGoBack}>
          go back
        </button>
        <button type="button" className="header__nav--link" onClick={handleGoForward}>
          go forward
        </button>
      </nav>
      <SearchBar />
    </header>
  );
};

export default Header;
