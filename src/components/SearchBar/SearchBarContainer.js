import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchQuery from './SearchQuery';
import SearchResults from './SearchResults';
import Loader from '../../packages/Loader';
import {
    searchMovie,
    resetSearch,
    getMovieList,
    setScrollValue
} from '../../store/searchMovie/action';

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
	 * @param {Object} props
	 * @memberof SearchBarContainer
	 */
	constructor(props) {
        super(props);
        this.loadingRef = React.createRef();
        this.handleSearchChange = this.handleSearchChange.bind(this);
	}

    /**
     * Initializes options to set the Intersection Observer
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

        this.props.getMovieList(this.props.list)
        .then(() => this.observer.observe(this.loadingRef.current));
    }

    componentWillUnmount () {
        this.props.resetSearch();
        this.observer.disconnect();
    }
    
    
    /**
     * Handle the observer's action or observation
     *
     * @param {array} entities
     * @memberof SearchBarContainer
     */
    handleObserver(entities) {
        const y = entities[0].boundingClientRect.y;
        const {
            value,
            prev,
            listExhausted,
            page,
            list,
            searchMovie,
            getMovieList,
            setScrollValue
        } = this.props;
        if (prev > y && !listExhausted) {
            if (value) {
                searchMovie(value, page);
            } else {
                getMovieList(list);
            }
        }
        setScrollValue(y);
    }


    /**
     * Handle the search value change
     * the function is passed as a prop to child
     *
     * @memberof SearchBarContainer
     */
    handleSearchChange(val) {
        const {
            list,
            page,
            resetSearch,
            getMovieList,
            searchMovie
        } = this.props;
        if (val.length < 1) {
            resetSearch();
            getMovieList(list);
        } else {
            searchMovie(val, page)
            .then(() => this.observer.observe(this.loadingRef.current));
        }
    }
    
	render() {
        const {
            value,
            results,
            isLoading,
            listExhausted
        } = this.props;
		return (
			<Fragment>
				<SearchQuery
					searchString={value}
                    onSearchChange={this.handleSearchChange}   
                />
                <SearchResults 
                    results={results}
                    loading={isLoading}
                    exhausted={listExhausted}
                />
                {!listExhausted && (
                    <LoaderWrapper ref={this.loadingRef} >
                        <Loader />
                    </LoaderWrapper>
                )}
            </Fragment>
		)
	}
}

const mapStateToProps = ({
        movie: {
            isLoading,
            page,
            list,
            results,
            prev,
            listExhausted,
            value,
            error
        }
    }) => {
    return {
        isLoading,
        page,
        list,
        results,
        prev,
        listExhausted,
        value,
        error
    }
};

const mapDispatchToProps = { searchMovie, resetSearch, getMovieList, setScrollValue };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);