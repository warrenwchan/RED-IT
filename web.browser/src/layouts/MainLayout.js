import React, {Component} from 'react';

import styles from './MainLayout.css'

class MainLayout extends Component {
  render() {
    return (
      <div className={styles.MainLayout}>
        { this.props.children }
      </div>
    );
  }
}

export default MainLayout;
