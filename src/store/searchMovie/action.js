import { 
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
    REQUEST_MOVIE_SEARCH,
    RESET_SEARCH_BAR,
    REQUEST_MORE_SEARCH_RESULTS,
    NO_MORE_RESULTS,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_ERROR,
    REQUEST_MOVIE_LIST,
    REQUEST_MORE_MOVIES,
    SET_SCROLLER_VALUE
} from './constants';
import _searchMovie from '../../helpers/searchMovie';
import _getMovieList from '../../helpers/getMovieList';
import regexpFilter from '../../helpers/regexpFilter';

/**
 * Invoked if movie search is requested from API
 * 
 * @returns {Object} Action
 */
const reqMovieSearch = (value) => ({ type: REQUEST_MOVIE_SEARCH, value });

/**
 * Invoked if more search results of movie are requested from API
 * 
 * @returns {Object} Action
 */
const reqMoreResults = () => ({ type: REQUEST_MORE_SEARCH_RESULTS});

/**
 * Invoked if search movie results are successfully fetched from the API
 * 
 * @param {Array} response response from the API
 * @param {integer} trailerKey id for the trailer on youtube
 * @returns {Object} Action
 */
const searchMovieSuccess = (response, page) => ({
    type: SEARCH_MOVIE_SUCCESS,
    payload: response,
    page: page+1
});

/**
 * Invoked if error is caused in fetching search movie lists from the API
 * 
 * @param {Array} response response from the API
 * @param {integer} trailerKey id for the trailer on youtube
 * @returns {Object} Action
 */
const searchMovieError = (error, page) => ({
    type: SEARCH_MOVIE_ERROR,
    payload: error,
    page: page-1
});

/**
 * Invoked if no more search movie results are fetched from API
 * 
 * @returns {Object} Action
 */
const noMoreResults = () => ({type: NO_MORE_RESULTS});

/**
 * Action creator to get the search movies
 * 
 * @param {integer} value search string
 * @param {integer} page
 * @return {function} 
 */
const searchMovie = (value, page) => {
    return dispatch => {
        if (page === 1) dispatch(reqMovieSearch(value));
        else dispatch(reqMoreResults());
        return _searchMovie(value, page)
            .then((response) => {
                if (response.length > 0) {
                    const filtered = regexpFilter(value, response);
                    dispatch(searchMovieSuccess(filtered, page))
                } else {
                    dispatch(noMoreResults())
                }
            })
            .catch(error => dispatch(searchMovieError(error, page)))
    };
};

/**
 * Invoked to reset the search bar
 * 
 * @returns {Object} Action
 */
const resetSearchBar = () => ({type: RESET_SEARCH_BAR})

/**
 * Action creator to reset the search bar
 * 
 * @return {function} 
 */
const resetSearch = () => {
    return dispatch => dispatch(resetSearchBar());
}

/**
 * Invoked if movie list is requested from API
 * 
 * @returns {Object} Action
 */
const reqMovieList = () => ({ type: REQUEST_MOVIE_LIST });

/**
 * Invoked if more list of movies are requested from API
 * 
 * @returns {Object} Action
 */
const reqMoreMovies = () => ({type: REQUEST_MORE_MOVIES});

/**
 * Invoked if movie list is successfully fetched from the API
 * 
 * @param {Array} response response from the API
 * @param {integer} page page of the list
 * @returns {Object} Action
 */
const getMovieListSuccess = (response, page) => ({
    type: GET_MOVIE_LIST_SUCCESS,
    payload: response,
    page: page+1
});

/**
 * Invoked if error is caused in fetching movie lists from the API
 * 
 * @param {Array} response response from the API
 * @param {integer} page page of the list
 * @returns {Object} Action
 */
const getMovieListError = (error, page) => ({
    type: GET_MOVIE_LIST_ERROR,
    payload: error,
    page: page-1
});

/**
 * Action creator to get the movie lists
 * 
 * @param {integer} page
 * @return {function} 
 */
const getMovieList = (page) => {
    return dispatch => {
        if (page === 1) dispatch(reqMovieList());
        else dispatch(reqMoreMovies());
        return _getMovieList(page)
            .then((response) => {
                dispatch(getMovieListSuccess(response, page))
            })
            .catch(error => dispatch(getMovieListError(error, page)))
    };
};

/**
 * Invoked to set the scroller value
 * 
 * @param {integer} scroller integer value of scroll
 * @returns {Object} Action
 */
const setScroller = (scroller) => ({type: SET_SCROLLER_VALUE, scroll: scroller});

/**
 * Action creator to set the scroller value
 * 
 * @param {integer} scroller scroll value
 * @return {function} 
 */
const setScrollValue = (scroller) => {
    return (dispatch) => dispatch(setScroller(scroller));
};

export {
    searchMovie,
    resetSearch,
    getMovieList,
    setScrollValue
};