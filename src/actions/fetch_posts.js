import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const API_KEY = '?key=ABASI123';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        action : FETCH_POSTS,
        payload: request
    };

}