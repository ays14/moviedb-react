import HttpService from '../services/HttpService';

const url = '/search/movie';

/**
 * Fetch the first page of movie search
 * 
 * @param {string} value search string
 */
const searchMovie = (value) => {
    const params = {
        language: 'en-US',
        page: 1,
        query: value,
    };
    return HttpService.get(url, params)
            .then(({data: {results}}) => results)
            .catch((err) => Promise.reject(err.response));
}

/**
 * Fetch the movie results for asked page
 * 
 * @param {string} value search string
 * @param {integer} page page to fetch
 */
const searchMoreResults = (value, page) => {
    const params = {
        language: 'en-US',
        page,
        query: value,
    };
    return HttpService.get(url, params)
            .then(({data: {results}}) => results)
            .catch((err) => Promise.reject(err.response));
}

export {
    searchMovie,
    searchMoreResults,
};