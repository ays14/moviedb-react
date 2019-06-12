import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from '../components/Home';
import MovieContainer from '../components/Movie';

/**
 * Create routes 
 * @param {Object} props props from the store
 */ 
const ConfigRoute = (props) => (
    <Provider store={props.store} >
        <HashRouter>
            <Switch>
            <Route 
                exact
                path="/" 
                component={HomeContainer}
                {...props}
            />
            <Route 
                exact
                path="/movie/:movieId" 
                component={MovieContainer}
                {...props} 
            />
            </Switch>
        </HashRouter>
    </Provider>
);

export default ConfigRoute;
