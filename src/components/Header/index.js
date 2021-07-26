import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../containers/Header/SearchBar';

const Header = () => (
  <header>
    <nav>
      <Link
        to="/"
      >
        MovieDB Project
      </Link>
    </nav>
    <SearchBar />
  </header>
);

export default Header;
