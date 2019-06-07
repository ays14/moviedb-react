import { 
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_ERROR,
    REQUEST_MOVIE_LIST,
    REQUEST_MORE_MOVIES,
    SET_SCROLLER_VALUE
} from './constants';

// Initial State
const initialState = {
    isLoading: false,
    data: [],
    page: 1,
    prev: 0,
    error: null
};

// Reducer
const getMovieDetails = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MOVIE_LIST:
            return { ...initialState, isLoading: true };
        case REQUEST_MORE_MOVIES:
            return {...state, isLoading: true};
        case GET_MOVIE_LIST_SUCCESS:
            return { ...state,
                    isLoading: false,
                    data: [...state.data, ...action.payload],
                    page: action.page,
                };
        case GET_MOVIE_LIST_ERROR:
            return { ...state,
                error: action.payload.error,
                page: action.page - 1
            }; 
        case SET_SCROLLER_VALUE:
            return { ...state,
                prev: action.scroll
            };
        default:
            return state;
    }
}

export default getMovieDetails;