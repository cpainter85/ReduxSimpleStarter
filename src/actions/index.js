import axios from 'axios';
import { API_KEY } from '../api_key';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);
  
  return {
    type: FETCH_POSTS,
    payload: request
  };
}