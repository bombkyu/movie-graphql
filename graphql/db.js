import fetch from "node-fetch";

const API_URL = 'https://yts.am/api/v2/list_movies.json?';

export const getMovies = (limit, rating) => {
    let REQUES_URL = API_URL;
    
    if(limit>0) {
        REQUES_URL += `limit=${limit}`;
    }
    if(rating>0) {
        REQUES_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUES_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
};
