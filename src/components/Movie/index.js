import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import HttpService from '../../services/HttpService';

const Container = styled.div`
    display: block;
`
const FlexContainer = styled.div`
    display: flex;
    column-count: 2;
    column-gap: 25%;
`

const Head = styled.h1`
    display: block;
    align-content: center;
    text-align: center;
    margin-block-end: 3%;
`;

const Card = styled.div`
    margin-top: 1.5%;
    margin-right: 1.5%;
    text-align: right;
    border-right: 2px solid black;
    padding-right: 3%;
    width: 50%;
`;

const Details = styled.div`
    text-align: left;
    width: 50%;
    margin-right: 10%;
    margin-left: 1.5%;
`;

const Video = styled.iframe`
    height: 90%;
    width: 100%;
`;

/**
 * Renders the component for Movie Details
 * Shows movie title, poster, synopsis and trailer a few more details
 *
 * @class Movie
 * @props Component Properties
 * @state Component State
 */
class Movie extends React.Component {
    /**
     * Creates an instance of Movie.
     *
     * @param {*} props
     * @memberof Movie
     */
    constructor(props) {
        super(props)
            this.state = {
            data: {},
            trailerFound: true
        }
    }
    
    /**
     * Perfoms API call to get movie details
     * Uses HTTP Service
     * 
     * @memberof Movie
     */
    componentWillMount() {
        const {match: {params: {movieId} } } = this.props;
        HttpService.get(`/movie/${movieId}`, {language: 'en-US', append_to_response: 'videos'}).then(response => {
            this.setState({
                data: response.data,
            });
        }).catch((err) => {
            console.log(err.response);
        });

    }

    /**
     * Checks whether trailer is found in JSON fetched from movie details
     *
     * @returns youtube key of trailer
     * @memberof Movie
     */
    getTrailer() {
        if (this.state.data.videos !== undefined) {
            const videos = this.state.data.videos.results.find((x) => {
                return x.type === "Trailer";
            });
            if (videos === undefined) {
                this.setState({
                    trailerFound: false
                });
            } else {
                return videos.key;
            }
        }
    }

    render() {
        const imageURL = 'http://image.tmdb.org/t/p/w200';
        const movie = this.state.data;      
        return (
            <Container>
                <Head>
                    <Link to='/'>
                        Movie Hunter
                    </Link>
                </Head>
                <hr></hr>
                <FlexContainer>
                    <Card>
                        <img src={imageURL+movie.poster_path} alt='loading'></img>
                        <h2><strong>{movie.title}</strong></h2>
                        <p>{movie.tagline}</p>
                    </Card>
                    <Details>
                        <p><strong>Synopsis: </strong>{movie.overview}</p>
                        <p>Released on: {movie.release_date}</p>
                        {movie.vote_count === 0 ? (
                            null
                        ) : (
                            <p>Rated {movie.vote_average} by {movie.vote_count} votes</p>
                        )}
                        {this.state.trailerFound ? (
                            <Video src={`https://www.youtube.com/embed/${this.getTrailer()}`}>

                            </Video>
                        ) : (
                            <p>Trailer not found</p>
                        )}
                    </Details>
                </FlexContainer>
            </Container>
        )
    }
}

export default Movie;
