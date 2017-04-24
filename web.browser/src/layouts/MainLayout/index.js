import React from 'react';
import HeaderBar from './../../components/HeaderBar';

import PropTypes from 'prop-types';

import styles from './styles.css'

const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderBar/>
      <div className={styles.mainLayout}>
        {children}
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;
