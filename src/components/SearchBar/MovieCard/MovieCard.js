import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetails = styled.li`
    display: inline-block;
    justify-content: center;
    padding: 12px 4px 12px 4px;
    margin-bottom: 20px;
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

const Title = styled.p`
    font-size: 16px;
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
                            src={`${imageURL}${posterPath}`} alt={title}>
                        </Image>
                        <Title>{title}</Title>
                    </FlexCard>        
                </Link>
            </MovieDetails>
        )
    )
}

export default MovieCard;