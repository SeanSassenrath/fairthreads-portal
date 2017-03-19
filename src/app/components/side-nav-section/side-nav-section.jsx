import React from 'react';
import styles from './side-nav-section.css';

const SideNavSection = props => (
  <div className={styles['component-container']}>
    {props.children}
  </div>
)

export default SideNavSection;