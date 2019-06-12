import axios from 'axios';
import { apiKey, baseURL }  from '../config';

// Create axios instance
const Axios = axios.create({
    baseURL,
    params: {
        api_key: apiKey
    },
});

/**
 * HTTP Service to make API calls for above set base URL
 *
 * @class HttpService
 */
class HttpService {
    /**
     * GET Method for HTTP Call
     *
     * @static
     * @param {string} url API URL
     * @param {object} params Parameters for request
     * @returns Axios response object
     * @memberof HttpService
     */
    static get(url, params) {
        return Axios.get(url, {params});
    }
}

export default HttpService;
