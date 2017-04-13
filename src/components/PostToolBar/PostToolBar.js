import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import styles from './styles.css';

const PostToolbar = () => (
    <Toolbar className={styles.Toolbar}>
        <ToolbarTitle text="Posts" />
        <div>
            <ToolbarTitle text="Sort:" />
            <FlatButton>Newest</FlatButton>
            <FlatButton>Popular</FlatButton>
        </div>
    </Toolbar>
)
export default PostToolbar;