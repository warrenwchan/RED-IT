import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostToolBar from '../../components/PostToolBar/';
import { PostList } from './../../containers/PostList/';

import Chip from 'material-ui/Chip';

import { data } from './../../mock-data';


class PostListContainer extends Component {

  postCategories(category, i) {
    return (<Chip key={i}>{this.category}</Chip>);
  }

  // upVote(clickedOnPost) {
  //   const newPostList = this.state.posts.map((post) => {
  //     if (clickedOnPost.id === post.id) {
  //       post.votes += 1;
  //     }
  //     return post;
  //   });
  //   this.setState({
  //     posts: newPostList
  //   });
  // }

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
        {data.posts.map((post, i) => {
           return <PostList
            post={post}
            key={i}
            upVote={clickedOnPost => this.upVote(clickedOnPost)}
          />
        })};
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(PostListContainer)

