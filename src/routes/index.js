import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from '../components/Home';
import MovieContainer from '../components/Movie';

/**
 * Create routes 
 */
export default () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={HomeContainer} />
      <Route path="/movie/:movieId" exact component={MovieContainer} />
    </Switch>
  </HashRouter>
);
