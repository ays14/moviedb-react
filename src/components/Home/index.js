import React from 'react';
import styled from 'styled-components';

import PopularMovies from '../PopularMovies';
import SearchBar from '../SearchBar/';

const Header = styled.h1`
    text-align: center;
    border-bottom: 0.5px solid black;
    padding-bottom: 10px;
`

class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: [],
    //         isSearching: false,
    //     }
    // }

    // componentWillMount() {
    //     HttpService.get('/movie/popular', {language: 'en-US', page: 1}).then(response => {

    //         this.setState({
    //             data: response.data.results,
    //         });
    //         // console.log(this.state.data[0].title);
    //     }).catch((err) => {
    //         console.log(err.response);
    //     });

    // }


    render() {
        return (
            <div>
                <Header>Movie Hunter</Header>
                <SearchBar />
                <Header>Popular Movies</Header>
                <PopularMovies 
                    // data={this.state.data}
                />        
            </div>
        );
    }
}

export default Home;
