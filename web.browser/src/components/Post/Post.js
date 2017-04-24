import React, { PropTypes } from 'react';

import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css';

const Post = ({ post, upVote }) => (
  <div>
    <Card className={styles.postContain}>
      <a href="{post.link}">
        <h3>{post.title}</h3>
      </a>
      <p>{post.description}</p>
      <div className={styles.postFooter}>
        <FlatButton onClick={() => upVote(post)}>▴ Vote {post.votes} </FlatButton>
        {post.categories.map(postCategories => postCategories)}
      </div>
    </Card>
  </div>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
  upVote: PropTypes.func.isRequired
};

export default Post;
