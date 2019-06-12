import HttpService from '../services/HttpService';

const url = '/movie/popular';

/**
 * Fetch list of popular movies
 * 
 * @param {integer} page page for movie list to fetch
 */
const getMovieList = (page) => {
    const params = {
        language: 'en-US',
        page
    };
    return HttpService.get(url, params)
            .then(({data: {results}}) => results)
            .catch((err) => Promise.reject(err.response));
}

export default getMovieList;