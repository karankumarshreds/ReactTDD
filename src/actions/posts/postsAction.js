import { GET_POSTS } from '../types';
import axios from 'axios';

export const fetchPostAction = () => async (dispatch) => {
    const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );
    dispatch({
        type: GET_POSTS,
        payload: data,
    });
};
