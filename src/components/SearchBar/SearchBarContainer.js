import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchQuery from './SearchQuery';
import SearchResults from './SearchResults';
import Loader from '../../packages/Loader';
import {
    searchMovie,
    resetSearch,
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
    }
    
    /**
     * Handle the observer's action or observation
     *
     * @param {array} entities
     * @memberof SearchBarContainer
     */
    handleObserver(entities) {
        const y = entities[0].boundingClientRect.y;
        if (this.props.prev > y && !this.props.listExhausted) {
            this.props.searchMovie(this.props.value, this.props.page);
        }
        this.props.setScrollValue(y);
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
            this.observer.disconnect();
            return this.props.resetSearch();
        }
        this.props.onSearching(true);
        this.props.searchMovie(val, this.props.page)
        .then(() => this.observer.observe(this.loadingRef.current));
    }
    
	render() {
		return (
			<Fragment>
				<SearchQuery
					searchString={this.props.value}
                    onSearchChange={this.handleSearchChange}   
				/>
                
				{this.props.value && (
                    <Fragment>
                        <SearchResults 
                            results={this.props.results}
                            loading={this.props.isLoading}
                            exhausted={this.props.listExhausted}
                        />
                        {!this.props.listExhausted && (
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

const mapStateToProps = ({searchMovie: {isLoading, page, results, prev, listExhausted, value, error}}) => {
    return {
        isLoading,
        page,
        results,
        prev,
        listExhausted,
        value,
        error
    }
};

const mapDispatchToProps = { searchMovie, resetSearch, setScrollValue };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);