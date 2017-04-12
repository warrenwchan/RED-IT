import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import HeaderBar from './components/HeaderBar';
// import Categories from './containers/Categories';
// import Week from './components/Week';
// import CreatPost from './containers/CreatePost';
// import Welcome from './containers/Welcome';
// import Login from './containers/Login';
// import PostList from './containers/PostList';
// import PostToolBar from './components/PostToolBar';
// import Post from './components/Post'; 
// import NotFound from './containers/NotFound';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';
import './styles/index.css';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <MainLayout>
      <App>
        <HeaderBar/>
      </App>
    </MainLayout>
  </MuiThemeProvider>,
  document.getElementById('root')
);
