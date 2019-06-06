import React, {Fragment} from 'react';
import styled from 'styled-components';

import MovieList from './MovieList';
import getMovieList from '../../helpers/getMovieListHelper';
import Loader from '../../packages/Loader';

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
     * @param {*} props
     * @memberof MovieListContainer
     */
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            page: 1,
            data: [],
            prev: 0,
        };
        this.loadingRef = React.createRef();
    }

    /**
     * Calls the first set of data from API call
     * Initializes the Intersection Observer to assist in infinite scroll
     *
     * @memberof MovieListContainer
     */
    componentDidMount() {
        this.getQueryResults();
        
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

        // Observe the ref with value loadingRef
        this.observer.observe(this.loadingRef.current);
    }
    
    /**
     * Handle the observer's action or observation
     *
     * @param {array} entities
     * @memberof MovieListContainer
     */
    handleObserver(entities) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prev > y) {
          const newPage = this.state.page + 1;
          this.setState({ page: newPage, isLoading: true });
          this.getQueryResults();
        }
        this.setState({ prev: y });
    }

    /**
     * Fetch more movies via API call incrementing the page by one
     * And add them to state
     * @memberof MovieListContainer
     */
    getQueryResults() {
        getMovieList(this.state.page)
        .then((response) => {
            const oldData = this.state.data;
            this.setState({
                data: [...oldData, ...response],
                isLoading: false,
            });
        })
        .catch((error) => console.log(error))
    }

    render() {
        return (
            <Fragment>
                <MovieList data={this.state.data} />
                <LoaderWrapper ref={this.loadingRef} >
                    <Loader />
                </LoaderWrapper>
            </Fragment>
        )
    }
}

export default MovieListContainer;