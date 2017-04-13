import React from 'react';

import Post from './../../components/Post';
import PostToolBar from './../../components/PostToolBar';

const PostList = ({ post, updateVote }) => {
    return (
        <div>
            <PostToolBar/>
            <Post/>
        </div>
    )
}

export default PostList;