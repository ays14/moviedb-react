import { 
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_ERROR,
    REQUEST_MOVIE_DETAILS
} from './constants';

// Initial State
const initialState = {
    isLoading: false,
    data: {},
    trailer: '',
    error: null
};

// Reducer
const getMovieDetails = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MOVIE_DETAILS:
            return { ...initialState, isLoading: true };
        case GET_MOVIE_DETAILS_SUCCESS:
            return { ...state,
                    isLoading: false,
                    data: action.payload,
                    trailer: action.key,
                };
        case GET_MOVIE_DETAILS_ERROR:
                return { ...state,
                    error: action.payload.error
                }; 
        default:
            return state;
    }
}

export default getMovieDetails;