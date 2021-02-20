import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchPostAction } from '../../actions/postsAction';

const Button = () => {
    const dispatch = useDispatch();
    const fetchPosts = () => {
        dispatch(fetchPostAction());
    };

    return (
        <button
            onClick={() => fetchPosts()}
            className="btn btn-primary "
            data-test="Button">
            Fetch posts
        </button>
    );
};

export default Button;
