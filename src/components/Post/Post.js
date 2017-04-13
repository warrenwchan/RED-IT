import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

import styles from './styles.css'

const Post = () => (
  <Card className={styles.postContain}>
    <CardHeader
      title="Without Avatar"
      subtitle="Subtitle"
    />
    <Chip> text </Chip>
  </Card>
);

export default Post;