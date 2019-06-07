import HttpService from '../services/HttpService';

const params = {
    language: 'en-US',
    append_to_response: 'videos'
};
/**
 * Fetch details of movie
 * 
 * @param {integer} movieId ID for movie to fetch
 */
const getMovie = (movieId) => {
    const url = `/movie/${movieId}`;
    return HttpService.get(url, params)
            .then(({data}) => data)
            .catch(err => Promise.reject(err.response));
}

export default getMovie;