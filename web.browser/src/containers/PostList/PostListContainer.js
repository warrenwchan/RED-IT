import React, { Component } from 'react';
import Chip from 'material-ui/Chip';

import PostToolBar from '../../components/PostToolBar/';
import { PostList } from './../../containers/PostList/';
import { data } from './../../mock-data';


class PostListContainer extends Component {
  constructor() {
    super();

    this.state = {
      posts: data.posts,
    };
  }

  postCategories(category, i) {
    return (<Chip key={i}>{this.category}</Chip>);
  }

  upVote(clickedOnPost) {
    const newPostList = this.state.posts.map((post) => {
      if (clickedOnPost.id === post.id) {
        post.votes += 1;
      }
      return post;
    });
    this.setState({
      posts: newPostList
    });
  }

  sortNewest() {
    const newPostOrder = this.state.posts.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({
      posts: newPostOrder
    });
  }

  sortPopular() {
    const popularOrder = this.state.posts.sort((b, a) => {
      return a.votes - b.votes;
    });
    this.setState({
      posts: popularOrder
    });
  }

  render() {
    return (
      <div>
        <PostToolBar
          newest={() => this.sortNewest()}
          popular={() => this.sortPopular()}
        />
        <PostList
          posts={this.state.posts}
          upVote={clickedOnPost => this.upVote(clickedOnPost)}
        />
      </div>
    );
  }
}

export default PostListContainer;

