import React from 'react';

import styles from './styles.css'

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      {children}
    </div>
  );
};

export default MainLayout;
