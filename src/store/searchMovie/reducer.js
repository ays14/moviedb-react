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

// Initial State
const initialState = {
    isLoading: true,
    results: [],
    value: '',
    list: 1,
    page: 1,
    listExhausted: false,
    prev: 0,
    error: null
};

// Reducer
const searchMovie = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MOVIE_SEARCH:
            return { ...initialState,
                    isLoading: true,
                    value: action.value,
                    page: action.page
                };
        case REQUEST_MORE_SEARCH_RESULTS:
            return {...state, isLoading: true};
        case SEARCH_MOVIE_SUCCESS:
            return { ...state,
                    isLoading: false,
                    results: [...state.results, ...action.payload],
                    page: action.page
                };
        case SEARCH_MOVIE_ERROR:
            return { ...state,
                    error: action.payload.error,
                    page: action.page
                };
        case RESET_SEARCH_BAR:
            return initialState;
        case NO_MORE_RESULTS:
            return {...state, listExhausted: true};
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
        case SET_SCROLLER_VALUE:
            return { ...state,
                    prev: action.scroll
                };
        default:
            return state;
    }
}

export default searchMovie;