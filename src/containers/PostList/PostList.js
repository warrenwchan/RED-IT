import React, { PropTypes } from 'react';

import Post from './../../components/Post';

const PostList = ({ posts, upVote }) => (
  <div>
    {posts.map(post => (
      <Post
        post={post}
        key={post.id}
        upVote={upVote}
      />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  upVote: PropTypes.func,
};

export default PostList;
