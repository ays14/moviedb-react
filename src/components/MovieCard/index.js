import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetails = styled.li`
    display: inline-block;
    align-self: center;
    padding: 8px 2% 8px 2%;
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
`

/**
 * Card for one movie on the homepage
 * Link to Movie Details page for a particular movie
 * Returns null if the poster is not found
 *
 * @class MovieCard
 * @props Component Properties
 */
class MovieCard extends React.Component {
    render() {
        const imageURL = 'http://image.tmdb.org/t/p/w185';

        return (
            this.props.data.poster_path ? (
                <MovieDetails >
                    <Link to={`/movie/${this.props.data.id}`} key={this.props.data.id}>
                        <FlexCard>
                            <Image 
                                src={imageURL+this.props.data.poster_path} alt={this.props.data.title}>
                            </Image>
                            <p>{this.props.data.title}</p>
                        </FlexCard>        
                    </Link>
                </MovieDetails>
            ) : (
                null   
            )
        )
    }
}

export default MovieCard;
