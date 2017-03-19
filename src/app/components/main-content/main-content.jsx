import React from 'react';
import styles from './main-content.css';

const MainContent = props => {
  return (
    <div className={styles['component-container']}>
      {props.children}
    </div>
  )
};

export default MainContent;