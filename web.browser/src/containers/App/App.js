import React, { Component } from 'react';

import Layout from '../layouts/Main';
import WelcomeMessage from '../../components/WelcomeMessage'

import './App.scss';

class App extends Component {
  render() {
    return (
      <Layout>
        <div className="App">
            <WelcomeMessage />
        </div>
      </Layout>
    );
  }
}

export default App;
