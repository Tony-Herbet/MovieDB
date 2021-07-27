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
          className="header__nav--title"
        >
          MovieDB Project
        </Link>
        <div className="header__nav--buttons">
          <button type="button" className="header__nav--buttons--button" onClick={handleGoBack}>
            &larr;
          </button>
          <button type="button" className="header__nav--buttons--button" onClick={handleGoForward}>
            &rarr;
          </button>
        </div>
      </nav>
      <SearchBar />
    </header>
  );
};

export default Header;
