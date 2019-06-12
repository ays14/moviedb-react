import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { forEach } from 'lodash';
import SearchQuery from './SearchQuery';
import SearchResults from './SearchResults';
import {
    searchMovie,
    getMovieList
} from '../../store/searchMovie/action';

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
        this.state = {
            value: ''
        };
        this.loadingRef = React.createRef();
        this.setObserver = this.setObserver.bind(this);
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
            threshold: 1
        };

        // Create an instance of Intersection Observer
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this), //callback
            options
        );

        this.props.getMovieList(this.props.list);
    }


    /**
     * Disconnects the observer on unmount and does a search reset
     *
     * @memberof SearchBarContainer
     */
    componentWillUnmount() {
        this.observer.disconnect();
    }

    /**
     * Handle the observer's action or observation
     *
     * @param {array} entities
     * @memberof SearchBarContainer
     */
    handleObserver(entities) {
        const {
            page,
            list,
            searchMovie,
            getMovieList,
        } = this.props;
        const { value } = this.state;
        forEach(entities, item => {
            if (item.isIntersecting && item.intersectionRatio === 1) {
                if (value) {
                    searchMovie(value, page+1);
                } else {
                    getMovieList(list+1);
                }
            }
        });
    }

    /**
     * Handle the search value change
     * the function is passed as a prop to child
     *
     * @memberof SearchBarContainer
     */
    handleSearchChange(val) {
        this.setState({ value: val });
        const {
            list,
            page,
            getMovieList,
            searchMovie
        } = this.props;
        if (val.length < 1) {
            getMovieList(list);
        } else {
            searchMovie(val, page);
        }
    }


    /**
     * Set the observer for intersection
     *
     * @param {*} target
     * @memberof SearchBarContainer
     */
    setObserver(target) {
        if (target) {
            this.observer.observe(target);
        } else {
            this.observer.disconnect();
        }
    }

    render() {
        const { results, isLoading, page, totalPages } = this.props;
        return (
            <Fragment>
                <SearchQuery
                    searchString={this.state.value}
                    onSearchChange={this.handleSearchChange}
                />
                <SearchResults
                    observer={this.setObserver}
                    results={results}
                    loading={isLoading}
                    page={page}
                    totalPages={totalPages}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = ({
    movie: { isLoading, page, list, results, totalPages, error }
}) => ({
    isLoading,
    page,
    list,
    results,
    error,
    totalPages
});

const mapDispatchToProps = {
    searchMovie,
    getMovieList,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBarContainer);