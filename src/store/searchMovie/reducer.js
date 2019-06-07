import { 
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
    REQUEST_MOVIE_SEARCH,
    RESET_SEARCH_BAR,
    REQUEST_MORE_SEARCH_RESULTS,
    NO_MORE_RESULTS,
    SET_SCROLLER_VALUE
} from './constants';

// Initial State
const initialState = {
    isLoading: true,
    results: [],
    value: '',
    page: 1,
    listExhausted: false,
    prev: 0,
    error: null
};

// Reducer
const searchMovie = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MOVIE_SEARCH:
            return { ...initialState, isLoading: true, value: action.value };
        case REQUEST_MORE_SEARCH_RESULTS:
            return {...state, isLoading: true};
        case SEARCH_MOVIE_SUCCESS:
            return { ...state,
                    isLoading: false,
                    results: [...state.results, ...action.payload],
                    page: action.page
                };
        case SEARCH_MOVIE_ERROR:
            return { ...initialState,
                error: action.payload.error,
                page: action.page
            };
        case RESET_SEARCH_BAR:
            return initialState;
        case NO_MORE_RESULTS:
            return {...state, listExhausted: true};
        case SET_SCROLLER_VALUE:
            return { ...state,
                prev: action.scroll
            };
        default:
            return state;
    }
}

export default searchMovie;