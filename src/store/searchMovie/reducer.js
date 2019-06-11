import { 
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
    REQUEST_MOVIE_SEARCH,
    RESET_SEARCH_BAR,
    REQUEST_MORE_SEARCH_RESULTS,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_ERROR,
    REQUEST_MOVIE_LIST,
    REQUEST_MORE_MOVIES,
} from './constants';

// Initial State
const initialState = {
    isLoading: true,
    results: [],
    list: 1,
    page: 1,
    totalPages: 1,
    error: null
};

// Reducer
const searchMovie = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MOVIE_SEARCH:
            return { ...initialState,
                    isLoading: true,
                    page: action.page
                };
        case REQUEST_MORE_SEARCH_RESULTS:
            return {...state, isLoading: true};
        case SEARCH_MOVIE_SUCCESS:
            return { ...initialState,
                    isLoading: false,
                    results: [...state.results, ...action.payload],
                    page: action.page,
                    totalPages: action.totalPages
                };
        case SEARCH_MOVIE_ERROR:
            return { ...state,
                    error: action.payload.error,
                    page: action.page
                };
        case RESET_SEARCH_BAR:
            return initialState;
        case REQUEST_MOVIE_LIST:
            return { ...initialState, isLoading: true, list: action.page};
        case REQUEST_MORE_MOVIES:
            return {...state, isLoading: true};
        case GET_MOVIE_LIST_SUCCESS:
            return { ...state,
                    isLoading: false,
                    results: [...state.results, ...action.payload],
                    list: action.page,
                };
        case GET_MOVIE_LIST_ERROR:
            return { ...state,
                    error: action.payload.error,
                    list: action.page
                }; 
        default:
            return state;
    }
}

export default searchMovie;