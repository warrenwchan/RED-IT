import React, { Component } from 'react';

import MainLayout from '../../layouts/MainLayout';
import WelcomeMessage from '../../components/WelcomeMessage'

import styles from './styles.css'

class App extends Component {
  render() {
    console.log(styles.App)
    return (
      <MainLayout>
        <div className={styles.app}>
            <WelcomeMessage />
        </div>
      </MainLayout>
    );
  }
}

export default App;
