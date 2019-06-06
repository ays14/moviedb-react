import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetails = styled.li`
    display: inline-block;
    align-self: center;
    padding: 8px 2px 8px 2px;
    margin-bottom: 15px;
`;

const FlexCard = styled.div`
    text-align: center;
    height: 320px;
    width: 240px;
`;

const Image = styled.img`
    max-height: 280px;
    max-width: 185px;
`;

const Text = styled.p`
    font-size: 14px;
    text-decoration: darkslategray;
`;

/**
 * Card for one movie on the homepage
 * Link to Movie Details page for a particular movie
 * Returns nothing if the poster is not found
 *
 * @param {object} props props from the parent component
 */
const MovieCard = props => {
    const imageURL = 'http://image.tmdb.org/t/p/w185';
    const {posterPath, id, title} = props;
    return (
        posterPath && (
            <MovieDetails >
                <Link to={`/movie/${id}`} key={id}>
                    <FlexCard>
                        <Image 
                            src={imageURL+posterPath} alt={title}>
                        </Image>
                        <Text>{title}</Text>
                    </FlexCard>        
                </Link>
            </MovieDetails>
        )
    )
}

export default MovieCard;