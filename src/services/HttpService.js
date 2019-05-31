import axios from 'axios';

const apiKey = "2556ac28d3c2f708dba5bb4bbb73cbe3";
//https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=2556ac28d3c2f708dba5bb4bbb73cbe3
const Axios = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: apiKey
    },
});

class HttpService {
    static get(url, params) {
        return Axios.get(url, {params});
    }
}

export default HttpService;
