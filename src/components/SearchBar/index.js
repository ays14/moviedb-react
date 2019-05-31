import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import HttpService from '../../services/HttpService';
import MovieCard from '../MovieCard/';

const Content = styled.div`
	text-align: center;
	align-content: center;
`;

const InputForm = styled.form`
	background-color: lightgray;
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

const LoadMsg = styled.p`
	font-size: 20px;
`;

const initialState = {
	isLoading: false,
	results: [],
	value: '',
	title: [],
	movieId: [],
	page: 1,
	listExhausted: false,
};

/**
 * Renders the search bar and also the fetched results
 * Shows the results in a scrollable lists of all the pages of search results fetched
 *
 * @class SearchBar
 * @props Component Properties
 * @state Component State
 */
class SearchBar extends React.Component {
	/**
	 * Creates an instance of SearchBar.
	 * 
	 * @param {*} props
	 * @memberof SearchBar
	 */
	constructor(props) {
		super(props);
		this.state = initialState;
		this.handleScroll = this.handleScroll.bind(this);
	}

	/**
	 * Adds event listener - scroll before component mounts
	 *
	 * @memberof SearchBar
	 */
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	/**
	 * Removes event listener - scroll before component unmounts
	 *
	 * @memberof SearchBar
	 */
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	/**
	 * Handler for scrolling action captured by event listener
	 *
	 * @memberof SearchBar
	 */
	handleScroll() {
		if(!this.state.listExhausted && (window.innerHeight + window.scrollY) > (window.innerHeight - 100) && !this.state.isLoading && (this.state.value !== '')) {
			const newPage = this.state.page+1;
			this.setState({
				isLoading: true,
				page: newPage
			});
			this.getMoreSearchResults();
		}
	}

	/**
	 * HTTP call to fetch more search results from the API, basically for the next page
	 *
	 * @memberof SearchBar
	 */
	getMoreSearchResults() {
		const { value, page, results } = this.state;
		HttpService.get(`/search/movie`, {
			language: 'en-US',
			query : value,
			page: page
		}).then(response => {
			const newData = response.data.results;
			const filteredData = this.regexpMatch(value, newData);
			if(newData.length > 0) {
				this.setState({
					isLoading: false,
					results: [...results, ...filteredData],
				});
			} else {
				this.setState({
					isLoading: false,
					listExhausted: true,
				})
			}}).catch((err) => {
				console.log(err.response);
		});
	}

	/**
	 * Handler for input in searchbar
	 *
	 * @memberof SearchBar
	 * @param {object} event event trigerred by onChange in Input value
	 */
	handleInputChange = (e) => {
		const value = e.target.value;
		this.setState({ isLoading: true,
			value: value
		});
		setTimeout(() => {
			const val = this.state.value;
			if (val.length < 1) {
				return this.setState(initialState);
			}
			
			HttpService.get(`/search/movie`, {
				language: 'en-US',
				query : value,
				page:this.state.page
			}).then(response => {
				const data = response.data.results;
				const filteredData = this.regexpMatch(val, data);
				this.setState({
					isLoading: false,
					results: filteredData,
				});
			}).catch((err) => {
				console.log(err.response);
			});
		}, 300);
	}

	/**
	 * Performs reg exp match for search string in the results
	 *
	 * @memberof SearchBar
	 * @param {string} value value of search string
	 * @param {string} data value of result of API call
	 */
	regexpMatch = (value, data) => {
		const re = new RegExp(_.escapeRegExp(value), 'i');
		const isMatch = (res) => re.test(res.title);
		return _.filter(data, isMatch);
	}

	render() {
		return (
			<Content>
				<InputForm>
					<Input
						placeholder="Search for movie..."
						value={this.state.value}
						onChange={_.debounce(this.handleInputChange, 1000, {
							leading: true,
							maxWait: 1500,
						})} />
				</InputForm>
				<SearchResults>
					{this.state.results.map((value) => (
						<MovieCard data={value} key={value.id}/>
					))}
					{!this.state.listExhausted ? (
						this.state.isLoading && <LoadMsg>Searching for movies please wait...</LoadMsg>
					) : (
						<LoadMsg>
							No more search results to show
						</LoadMsg>					
					)}
				</SearchResults>  
			</Content>
		)
	}
}

export default SearchBar;
