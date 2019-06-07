import { 
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_ERROR,
    REQUEST_MOVIE_DETAILS
} from './constants';
import getMovie from '../../helpers/getMovie';
import getTrailer from '../../helpers/getTrailer';

/**
 * Invoked if movie details are requested from API
 * 
 * @returns {Object} Action
 */
const reqMovieDetails = () => ({ type: REQUEST_MOVIE_DETAILS });

/**
 * Invoked if movie details are successfully fetched from the API
 * 
 * @param {Array} response response from the API
 * @param {integer} trailerKey id for the trailer on youtube
 * @returns {Object} Action
 */
const getMovieDetailsSuccess = (response, trailerKey) => ({
    type: GET_MOVIE_DETAILS_SUCCESS,
    payload: response,
    key: trailerKey
});

/**
 * Invoked if error is caused in fetching movie details from the API
 * 
 * @param {Object} error response from the API
 * @returns {Object} Action
 */
const getMovieDetailsError = (error) => ({
    type: GET_MOVIE_DETAILS_ERROR,
    payload: error
});

/**
 * Action creator to get the movie details
 * 
 * @param {integer} payload movieId
 * @return {function} 
 */
const getMovieDetails = (payload) => {
    return dispatch => {
        dispatch(reqMovieDetails());
        return getMovie(payload)
            .then((response) => {
                const trailerKey = getTrailer(response.videos);
                dispatch(getMovieDetailsSuccess(response, trailerKey))
            })
            .catch(error => dispatch(getMovieDetailsError(error)))
    };
};


export default getMovieDetails;