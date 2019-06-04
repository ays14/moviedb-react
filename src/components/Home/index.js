import React from 'react';
import styled from 'styled-components';

import PopularMovies from '../PopularMovies';
import SearchBar from '../SearchBar/';

const Header = styled.h1`
    text-align: center;
    border-bottom: 0.5px solid black;
    padding-bottom: 10px;
`

/**
 * Home component
 * Renders other child components of the homepage
 *
 * @class Home
 */
class Home extends React.Component {
    render() {
        return (
            <div>
                <Header>Movie Hunter</Header>
                <SearchBar />
                <Header>Popular Movies</Header>
                <PopularMovies />        
            </div>
        );
    }
}

export default Home;
