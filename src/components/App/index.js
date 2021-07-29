import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/components/Header/index';
import Movie from 'src/containers/Movie';
import Movies from 'src/containers/Movies';
import Error404 from 'src/components/Error404';
import Genres from 'src/containers/Genres';
import GenrePage from 'src/containers/GenrePage';

import './app.scss';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/">
        <Genres />
      </Route>
      <Route exact path="/Movies">
        <Movies />
      </Route>
      <Route exact path="/Movie/:slug">
        <Movie />
      </Route>
      <Route exact path="/Genre/:slug">
        <GenrePage />
      </Route>
      <Route>
        <Error404 />
      </Route>
    </Switch>
  </div>
);

export default App;
