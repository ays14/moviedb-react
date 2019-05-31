import React from 'react';
import styled from 'styled-components';

import MovieCard from '../MovieCard/';
import HttpService from '../../services/HttpService';

const FlexContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    margin: 10px ;
    align-content: center;
`;

const Content = styled.div`
    min-height: 900px;
`;

const Loader = styled.div`
    display: block;
    text-align: center;
`;

/**
 * Renders and infinitely scrollable list
 * Stores the data in state as an Array and calls MovieCard to show each movie
 *
 * @class PopularMovies
 * @state Component State
 */
class PopularMovies extends React.Component {
    /**
     * Creates an instance of PopularMovies.
     * 
     * @param {*} props
     * @memberof PopularMovies
     */
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            page: 1,
            data: [],
            prev: 0,
        }
    }

    /**
     * Calls the first set of data from API call
     * Initializes the Intersection Observer to assist in infinite scroll
     *
     * @memberof PopularMovies
     * @props Component Properties
     */
    componentDidMount() {
        this.getMoreQueryResults();
        
        // Set options for observer
        var options = {
            root: null, // Set page as root
            rootMargin: '0px', 
            threshold: 0.2
        };

        // Create an instance of Intersection Observer
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this), //callback
            options
        );

        // Observe the ref with value loadingRef
        this.observer.observe(this.loadingRef);
    }
    
    /**
     * Handle the observer's action or observation
     *
     * @param {array} entities
     * @memberof PopularMovies
     */
    handleObserver(entities) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prev > y) {
          const newPage = this.state.page + 1;
          this.setState({ page: newPage, isLoading: true });
          this.getMoreQueryResults();
        }
        this.setState({ prev: y });
    }

    /**
     * Fetch more movies via API call incrementing the page by one
     * And add them to state
     * @memberof PopularMovies
     */
    getMoreQueryResults() {
        HttpService.get('/movie/popular', {language: 'en-US', page: this.state.page}).then(response => {
            const results = this.state.data;
            this.setState({
                data: [...results, ...response.data.results],
                isLoading: false,
            });
        }).catch((err) => {
            console.log(err.response);
        });
    }

    render() {
        return (
            <Content>
                <FlexContainer >
                    {this.state.data.map((value) => (
                        <MovieCard data={value} key={value.id}/>
                        ))}
                    <Loader ref={loadingRef => (this.loadingRef = loadingRef)} >
                        <h3>Loading...</h3>
                    </Loader>
                </FlexContainer>
            </Content>
        )
    }
}

export default PopularMovies;
