import React from 'react';
import styled from 'styled-components';
import MovieCard from '../MovieCard';

const Container = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    padding: 16px;
`;

const Wrapper = styled.div`
    min-height: 900px;
    padding: 20px;
`;

/**
 * MovieList Component
 * Renders Movie Card as a mapping of array fetched from props
 *
 * @param {object} props props from the parent component
 */
const MovieList = props => {
    return (
        <Wrapper>
            <Container>
                {props.data.map((value) => (
                    <MovieCard 
                        posterPath={value.poster_path} 
                        title={value.title}
                        id={value.id}
                        key={value.id}
                    />
                    ))}
            </Container>
        </Wrapper>
    )
}

export default MovieList;