import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Genres from '../../containers/Genres';
import GenrePage from '../../containers/GenrePage';

import './app.scss';

const App = () => (
  <div className="App">
    <header className="App-header">
      header
    </header>
    <Switch>
      <Route exact path="/">
        <Genres />
      </Route>
      <Route exact path="/:slug">
        <GenrePage />
      </Route>
    </Switch>
  </div>
);

export default App;
