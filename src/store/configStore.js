import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import getMovieDetails from './movieDetails/reducer';
import movie from './searchMovie/reducer';

const middlewareList =  applyMiddleware(thunk, createLogger());

// Reducer
const appReducer = combineReducers({
    router: routerReducer,
    getMovieDetails,
    // getMovieList,
    movie
});

/**
 * Root reducer
 * @param {Object} state Current state
 * @param {Object} action Action
 * @return {Object} App reducer
 */
const rootReducer = (state, action) => {
    return appReducer(state, action);
}

// Create Store with enabled redux devTools
const configStore = (initialState) => createStore(rootReducer, compose(middlewareList,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default configStore;