import React, { Component } from 'react';

import PostList from './PostList';
import PostToolBar from './../../components/PostToolBar';

import data from './../../mock-data';

class PostListContainer extends Component {

    render() {
        return (
            <div>
                <PostList/>
            </div>
        )
    }
}

export default PostListContainer;