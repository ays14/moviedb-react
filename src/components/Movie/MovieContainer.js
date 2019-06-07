import React from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import Loader from '../../packages/Loader';
import getMovieDetails from '../../store/movieDetails/action';

/**
 * Renders the component for Movie Details
 * Shows movie title, poster, synopsis and trailer a few more details
 *
 * @class MovieContainer
 * @props Component Properties
 */
class MovieContainer extends React.Component {
    /**
     * Perfoms call to get movie details
     * 
     * @memberof MovieContainer
     */
    componentWillMount() {
        const {match: {params: {movieId} } } = this.props;
        this.props.getMovieDetails(movieId);
    }

    render() {
        if (this.props.isLoading) {
            return <Loader />
        } else {
            const {data :{
                title,
                tagline,
                overview,
                poster_path,
                release_date,
                vote_average,
                vote_count
            },
                trailer
            } = this.props;
            return (
                this.props.isLoading ? <Loader /> : (
                    <Movie 
                        title={title}
                        tagline={tagline}
                        overview={overview}
                        posterPath={poster_path}
                        releaseDate={release_date}
                        voteAverage={vote_average}
                        voteCount={vote_count}
                        trailer={trailer}
                    />
                )
            )
        }
    }
}

const mapStateToProps = ({getMovieDetails: {data, trailer, isLoading, error}}) => {
    return {
        data,
        trailer,
        isLoading,
        error
    };
};

const mapDispatchToProps = { getMovieDetails };

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
