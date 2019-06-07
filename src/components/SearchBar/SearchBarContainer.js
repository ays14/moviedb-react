import React, {Fragment} from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import {searchMovie, searchMoreResults} from '../../helpers/searchMovieHelper';
import SearchQuery from './SearchQuery';
import SearchResults from './SearchResults';
import Loader from '../../packages/Loader';

const LoaderWrapper = styled.div`
    text-align: center;
`;

/**
 * Renders the search bar and also the fetched results
 * Shows the results in a scrollable lists of all the pages of search results fetched
 *
 * @class SearchBarContainer
 * @props Component Properties
 */
class SearchBarContainer extends React.Component {
	/**
	 * Creates an instance of SearchBar.
	 * 
	 * @param {*} props
	 * @memberof SearchBarContainer
	 */
	constructor(props) {
        super(props);
        this.loadingRef = React.createRef();
        this.initialState = {
            isLoading: false,
            results: [],
            value: '',
            page: 1,
            listExhausted: false,
            prev: 0,
        };
        this.state = this.initialState;
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.getQueryResults = this.getQueryResults.bind(this);
	}

    /**
     * Invoked to set the Intersection Observer
     * Also calls the first set of data from API
     *
     * @memberof SearchBarContainer
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

        // Observe the ref with value loadingRef
        // this.observer.observe(this.loadingRef);
    }
    
    /**
     * Handle the observer's action or observation
     *
     * @param {array} entities
     * @memberof SearchBarContainer
     */
    handleObserver(entities) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prev > y && !this.state.listExhausted) {
            this.setState((state) => {
                return {
                    page: state.page+1,
                    isLoading: true
                }
            }, () => {
                const { value, page } = this.state;
                this.getMoreQueryResults(value, page);
            });
        }
        this.setState({ prev: y });
    }


    /**
     * Handle the search value change
     * the function is passed as a prop to child
     *
     * @memberof SearchBarContainer
     */
    handleSearchChange(val) {
        if (val.length < 1) {
            this.props.onSearching(false);
            return this.setState(this.initialState);
        }
        this.props.onSearching(true);
        this.getQueryResults(val);
    }
    
    /**
     * Handles the first call to fetch the data
     *
     * @param {string} queryVal
     * @memberof SearchBarContainer
     */
    getQueryResults(queryVal) {
        searchMovie(queryVal)
        .then(newData => {
            const filteredData = this.regexpMatch(queryVal, newData);
            this.setState({
                isLoading: false,
                results: filteredData,
                value: queryVal,
            });
            this.observer.observe(this.loadingRef.current);
        }).catch((err) => {
            console.log(err.response);
        });
    }

    /**
     * Handles subsequent calls to fetch the data
     *
     * @param {string} queryVal
     * @param {integer} page
     * @memberof SearchBarContainer
     */
    getMoreQueryResults(queryVal, page) {
        searchMoreResults(queryVal, page)
        .then(newData => {
            const filteredData = this.regexpMatch(queryVal, newData);
            if(newData.length > 0) {
                this.setState((state) => {
                    return {
                        isLoading: false,
                        results: [...state.results, ...filteredData],
                    }
                });
			} else {
				this.setState({
					isLoading: false,
					listExhausted: true,
                });
            }
        }).catch((err) => {
            console.log(err.response);
        });
    }

	/**
	 * Performs reg exp match for search string in the results
	 *
	 * @memberof SearchBarContainer
	 * @param {string} value value of search string
	 * @param {string} data value of result of API call
	 */
	regexpMatch(value, data) {
		const re = new RegExp(_.escapeRegExp(value), 'i');
		const isMatch = (res) => re.test(res.title);
		return _.filter(data, isMatch);
	}

	render() {
		return (
			<Fragment>
				<SearchQuery
					searchString={this.state.value}
                    onSearchChange={this.handleSearchChange}   
				/>
                
				{this.state.value && (
                    <Fragment>
                        <SearchResults 
                            results={this.state.results}
                            loading={this.state.isLoading}
                            exhausted={this.state.listExhausted}
                        />
                        {!this.state.listExhausted && (
                            <LoaderWrapper ref={this.loadingRef} >
                                <Loader />
                            </LoaderWrapper>
                        )}
                    </Fragment>
                )}
			</Fragment>
		)
	}
}

export default SearchBarContainer;
