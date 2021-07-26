import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Genres from '../../containers/Genres';
import GenrePage from '../../containers/GenrePage';
import Movie from '../../containers/Movie';
import Movies from '../../containers/Movies';

import './app.scss';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/">
        <Genres />
      </Route>
      <Route exact path="/:slug">
        <GenrePage />
      </Route>
      <Route exact path="/Movies">
        <Movies />
      </Route>
      <Route exact path="/Movie/:slug">
        <Movie />
      </Route>
    </Switch>
  </div>
);

export default App;
