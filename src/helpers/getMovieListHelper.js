import HttpService from '../services/HttpService';

const url = '/movie/popular';

/**
 * Fetch list of popular movies
 * 
 * @param {integer} page page for movie list to fetch
 */
const getMovieList = (page) => {
    return new Promise((resolve, reject) => {
        HttpService.get(url, {
            language: 'en-US',
            page: page
        }).then(({data: {results}}) => {
            resolve(results);
        }).catch((err) => {
            reject(err.response);
        });
    });
}

export default getMovieList;