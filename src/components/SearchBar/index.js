import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import HttpService from '../../services/HttpService';
import MovieCard from '../MovieCard/';

const Content = styled.div`
  text-align: center;
  align-content: center;
`;

const Input = styled.input`
  text-align: center;
  width: 40%;
  height: 35px;
`;

const SearchResults = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    align-content: left;
`;

const initialState = {
    isLoading: false,
    results: [],
    value: '',
    title: [],
    movieId: [],
    page: 1,
    match: false,
    searchString: '',
    listExhausted: false,
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleScroll = this.handleScroll.bind(this);
}

componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll() {
    if(!this.state.listExhausted && (window.innerHeight + window.scrollY) > (window.innerHeight - 200) && !this.state.isLoading && (this.state.searchString !== ''))
        {
            const newPage = this.state.page+1;
            this.setState({isLoading: true, page: newPage});
            this.getMoreSearchResults();
        }
}

getMoreSearchResults() {
    HttpService.get(`/search/movie`, {language: 'en-US', query : this.state.searchString, page:this.state.page}).then(response => {
        const data = response.data.results;
        const oldData = this.state.results;
        // console.log(data.length);
        if(data.length > 0) {
          this.setState({
            isLoading: false,
            results: [...oldData, ..._.filter(data, this.state.match)],
          });
        } else {
            this.setState({
                isLoading: false,
                listExhausted: true,
            })
        }
    }).catch((err) => {
        console.log(err.response);
    });
}

  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({ isLoading: true, value })
      setTimeout(() => {
        if (this.state.value.length < 1) {return this.setState(initialState);}
            //   console.log(value);

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.title);

            HttpService.get(`/search/movie`, {language: 'en-US', query : value, page:this.state.page}).then(response => {
              const data = response.data.results;
              this.setState({
                isLoading: false,
                results: _.filter(data, isMatch),
                // results: data,
                match: isMatch,
                searchString: value,
              });
          }).catch((err) => {
              console.log(err.response);
          });
    }, 300);
  }

  // getArray(arr, k) {
  //   let tarr = [];
  //   const checkKey = k;
  //   arr.map((value) => {
  //       tarr.push(value[checkKey]);
  //   });
  //   return tarr;
  // }

  render() {
    return (
      <Content>
          <form>
            <Input
              placeholder="Search for movie..."
              value={this.state.value}
              onChange={_.debounce(this.handleInputChange, 1000, {
                leading: true,
                maxWait: 1500,
              })}
            />
        </form>
            <SearchResults>
                {this.state.results.map((value) => (
                    <MovieCard data={value} />
                    ))}
                    {!this.state.listExhausted ? (
                        <div>
                            {this.state.isLoading && <h3>Searching for movies...</h3>}
                        </div>
                    ) : (
                        <h3>No more results to search and show</h3>
                    )}
            </SearchResults>  
          </Content>
    )
  }
 }

export default SearchBar;
