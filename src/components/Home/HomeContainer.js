import React, { Component, Fragment } from 'react';
import Home from './Home';
import SearchBarContainer from '../SearchBar';

/**
 * Home container
 *
 * @class HomeContainer
 */
class HomeContainer extends Component {
    render() {
        return (
            <Fragment>
                <Home />
                <SearchBarContainer />
            </Fragment>
        );
    }
}

export default HomeContainer;