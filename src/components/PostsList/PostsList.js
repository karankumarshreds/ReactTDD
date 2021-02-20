import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../ListItem/ListItem';

const PostsList = ({ posts }) => {
    const renderPosts = () => {
        return posts.map((post, i) => (
            <ListItem
                key={i}
                title={post.title}
                description={post.body}
                data-test="ListItem"
            />
        ));
    };

    return (
        <div data-test="PostList">
            <h1 className="my-5">Latest Posts</h1>
            {renderPosts()}
        </div>
    );
};

const mapStateToProps = ({ postsState }) => {
    return {
        posts: postsState.posts,
    };
};

export default connect(mapStateToProps)(PostsList);
