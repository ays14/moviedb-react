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
    /* justify-content: center; */
    align-content: center;
`;

const Content = styled.div`
    min-height: 900px;
`;

const Loader = styled.div`
    display: block;
    text-align: center;
`;

class PopularMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            page: 1,
            data: [],
            prev: 0,
        }
    }

    componentDidMount() {
        this.getMoreQueryResults();
        // Options
        var options = {
            root: null, // Page as root
            rootMargin: '0px',
            threshold: 1.0
        };
        // Create an observer
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this), //callback
            options
        );
        //Observ the `loadingRef`
        this.observer.observe(this.loadingRef);
    }
    
    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prev > y) {
        //   const lastMovie = this.state.data[this.state.data.length - 1];
          const newPage = this.state.page + 1;
          this.setState({ page: newPage, isLoading: true });
          this.getMoreQueryResults();
        }
        this.setState({ prev: y });
    }

    getMoreQueryResults() {
        HttpService.get('/movie/popular', {language: 'en-US', page: this.state.page}).then(response => {
            const results = this.state.data;
            this.setState({
                data: [...results, ...response.data.results],
                isLoading: false,
            });
            // console.log(this.state.data[0].title);
        }).catch((err) => {
            console.log(err.response);
        });
    }

    render() {
        return (
            <Content>
                <FlexContainer >
                    {this.state.data.map((value) => (
                        <MovieCard data={value} />
                        ))}
                    {/* {this.state.isLoading && <h1>Loading more movies</h1>} */}
                    <Loader ref={loadingRef => (this.loadingRef = loadingRef)} >
                        <h3>Loading...</h3>
                    </Loader>
                </FlexContainer>
            </Content>
        )
    }
}

export default PopularMovies;
