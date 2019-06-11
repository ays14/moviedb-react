import HttpService from '../services/HttpService';

const url = '/search/movie';

/**
 * Fetch the movie results for asked page
 * 
 * @param {string} value search string
 * @param {integer} page page to fetch
 */
const searchMovie = (value, page) => {
    const params = {
        language: 'en-US',
        page,
        query: value,
    };
    return HttpService.get(url, params)
            .then(({data}) => data)
            .catch((err) => Promise.reject(err.response));
}

export default searchMovie;