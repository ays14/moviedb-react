import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MovieList from './MovieList';
import Loader from '../../packages/Loader';
import { getMovieList, setScrollValue } from '../../store/movieList/action';

const LoaderWrapper = styled.div`
    display: block;
    text-align: center;
`;

/**
 * Renders and infinitely scrollable list
 * Stores the data in state as an Array and calls MovieCard to show each movie
 *
 * @class MovieListContainer
 */
class MovieListContainer extends React.Component {
    /**
     * Creates an instance of PopularMovies.
     * 
     * @param {Object} props
     * @memberof MovieListContainer
     */
    constructor(props) {
        super(props);
        this.loadingRef = React.createRef();
    }

    /**
     * Calls the first set of data from API call in props
     * Initializes the Intersection Observer to assist in infinite scroll
     *
     * @memberof MovieListContainer
     */
    componentDidMount() {
        // Set options for observer
        const options = {
            root: null, // Set page as root
            rootMargin: '0px', 
            threshold: 0,
        };
        
        // Create an instance of Intersection Observer
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this), //callback
            options
            );
            
        // Observe the ref with value loadingRef after getting data
        this.props.getMovieList(this.props.page)
        .then(() => this.observer.observe(this.loadingRef.current));
    }
    
    /**
     * Handle the observer's action or observation
     *
     * @param {array} entities
     * @memberof MovieListContainer
     */
    handleObserver(entities) {
        const y = entities[0].boundingClientRect.y;
        if (this.props.prev > y) {
            this.props.getMovieList(this.props.page);
        }
        this.props.setScrollValue(y);
    }

    render() {
        return (
            <Fragment>
                {this.props.isLoading && <Loader />}
                <MovieList data={this.props.data} />
                <LoaderWrapper ref={this.loadingRef} >
                    <Loader />
                </LoaderWrapper>
            </Fragment>
        )
    }
}

const mapStateToProps = ({getMovieList: {isLoading, page, data, prev, error}}) => {
    return {
        isLoading,
        page,
        data,
        prev,
        error
    }
};

const mapDispatchToProps = { getMovieList, setScrollValue };

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);