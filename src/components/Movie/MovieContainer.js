import React from 'react';
import getMovie from '../../helpers/getMovie';
import Movie from './Movie';
import Loader from '../../packages/Loader';

/**
 * Renders the component for Movie Details
 * Shows movie title, poster, synopsis and trailer a few more details
 *
 * @class MovieContainer
 * @props Component Properties
 */
class MovieContainer extends React.Component {
    /**
     * Creates an instance of Movie.
     *
     * @param {object} props
     * @memberof MovieContainer
     */
    constructor(props) {
        super(props);
            this.state = {
            data: {},
            trailer: '',
            isLoading: true,
        };
        this.getTrailer = this.getTrailer.bind(this);
    }
    
    /**
     * Perfoms API call to get movie details
     * Uses HTTP Service
     * 
     * @memberof MovieContainer
     */
    componentWillMount() {
        const {match: {params: {movieId} } } = this.props;
        getMovie(movieId).then(response => {
            this.setState({
                isLoading: true,
                data: response,
                videos: response.videos,
            });
            this.getTrailer();
        }).catch((err) => {
            console.log(err.response);
        });
    }

    /**
     * Checks whether trailer is found in JSON fetched from movie details
     *
     * @returns youtube key of trailer
     * @memberof MovieContainer
     */
    getTrailer() {
        const {videos} = this.state;
        if (videos) {
            const result = videos.results.find((x) => {
                return x.type === "Trailer";
            });
            if (result) {
                this.setState({
                    trailer: result.key,
                    isLoading: false,
                });
            } else {
                this.setState({
                    trailer: '',
                    isLoading: false,
                });
            }
        }
    }

    render() {
        return (
            this.state.isLoading ? <Loader /> : (
                <Movie 
                    title={this.state.data.title}
                    tagline={this.state.data.tagline}
                    overview={this.state.data.overview}
                    posterPath={this.state.data.poster_path}
                    releaseDate={this.state.data.release_date}
                    voteAverage={this.state.data.vote_average}
                    voteCount={this.state.data.vote_count}
                    trailer={this.state.trailer}
                />
            )
        )
    }
}

export default MovieContainer;
