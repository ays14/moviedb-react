import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home/';
import Movie from '../components/Movie/';

/**
 * Create routes 
 */
export default () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie/:movieId" exact component={Movie} />
    </Switch>
  </HashRouter>
);
