import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import getMovieDetails from './movieDetails/reducer';
import movie from './searchMovie/reducer';

const middlewareList = process.env.NODE_ENV === 'production' 
    ? applyMiddleware(thunk)
    : applyMiddleware(thunk, createLogger());

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Reducer
const appReducer = combineReducers({
    router: routerReducer,
    getMovieDetails,
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

// Create Store with enabled redux devTools but not in production
const configStore = (initialState) => (
    process.env.NODE_ENV === 'production'
        ? createStore(rootReducer, middlewareList)
        : createStore(rootReducer, compose(middlewareList, devTools)));

export default configStore;