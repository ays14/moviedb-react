import HttpService from '../services/HttpService';

const url = '/search/movie';

/**
 * Fetch the first page of movie search
 * 
 * @param {string} value search string
 */
const searchMovie = (value) => {
    return new Promise((resolve, reject) => {
        HttpService.get(url, {
            language: 'en-US',
            page: 1,
            query: value,
        }).then(({data: {results}}) => {
            resolve(results);
        }).catch((err) => {
            reject(err.response);
        });
    });
}

/**
 * Fetch the movie results for asked page
 * 
 * @param {string} value search string
 * @param {integer} page page to fetch
 */
const searchMoreResults = (value, page) => {
    return new Promise((resolve, reject) => {
        HttpService.get(url, {
            language: 'en-US',
            page: page,
            query: value,
        }).then(({data: {results}}) => {
            resolve(results);
        }).catch((err) => {
            reject(err.response);
        });
    });
}

export {
    searchMovie,
    searchMoreResults,
};