import React, { Component, Fragment } from 'react';
import Home from './Home';
import SearchBarContainer from '../SearchBar';
import MovieListContainer from '../MovieList';

/**
 * Home container
 *
 * @class HomeContainer
 */
class HomeContainer extends Component {
    /**
     * Creates an instance of HomeContainer
     *
     * @param {object} props
     * @memberof HomeContainer
     */
    constructor(props) {
        super(props);
        this.state = {
            isSearching: false
        };
        this.isUserSearching = this.isUserSearching.bind(this);
    }

    /**
     * Handles the state of searching
     *
     * @memberof HomeContainer
     */
    isUserSearching(value) {
        this.setState({
            isSearching: value,
        });
    }

    render() {
        return (
            <Fragment>
                <Home />
                <SearchBarContainer 
                    onSearching={this.isUserSearching} 
                />
                {!this.state.isSearching && <MovieListContainer />}        
            </Fragment>
        );
    }
}

export default HomeContainer;