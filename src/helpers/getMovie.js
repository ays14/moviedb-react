import HttpService from '../services/HttpService';

/**
 * Fetch details of movie
 * 
 * @param {integer} movieId ID for movie to fetch
 */
const getMovie = (movieId) => {
    const url = `/movie/${movieId}`;
    return new Promise((resolve, reject) => {
        HttpService.get((url), {
            language: 'en-US',
            append_to_response: 'videos'
        }).then(({data}) => {
            resolve(data);
        }).catch((err) => {
            reject(err.response);
        });
    });
}

export default getMovie;