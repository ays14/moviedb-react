import { 
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_ERROR,
    REQUEST_MOVIE_LIST,
    REQUEST_MORE_MOVIES,
    SET_SCROLLER_VALUE
} from './constants';
import _getMovieList from '../../helpers/getMovieList';

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

export { getMovieList, setScrollValue };