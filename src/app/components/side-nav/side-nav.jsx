import React from 'react';
import styles from './side-nav.css';

const SideNav = props => (
  <div className={styles['component-container']}>
    {props.children}
  </div>
)

export default SideNav;