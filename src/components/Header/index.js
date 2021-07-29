import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import SearchBar from 'src/containers/Header/SearchBar';

import './header.scss';

// Component use for the header
const Header = () => {
  // history & handlers are use to make buttons to navigate back/forward
  // with the keyboard to "simulate" a remote controller
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
          className="header__nav__title"
        >
          MovieDB Project
        </Link>
        <div className="header__nav__buttons">
          <button type="button" className="header__nav__buttons__button" onClick={handleGoBack}>
            &larr;
          </button>
          <button type="button" className="header__nav__buttons__button" onClick={handleGoForward}>
            &rarr;
          </button>
        </div>
      </nav>
      <SearchBar />
    </header>
  );
};

export default Header;
