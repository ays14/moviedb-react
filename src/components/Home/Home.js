import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    text-align: center;
    border-bottom: 0.8px solid black;
    padding-bottom: 12px;
`

/**
 * Home component
 * 
 * @param {object} props props from the parent component
 */
 const Home = props => {
    return (
        <Header>Movie Hunter</Header>
    );
}

export default Home;
