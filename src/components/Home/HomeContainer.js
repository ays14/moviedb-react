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
        if (value) {
            this.setState({
                isSearching: true,
            });
        } else {
            this.setState({
                isSearching: false,
            });
        }
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