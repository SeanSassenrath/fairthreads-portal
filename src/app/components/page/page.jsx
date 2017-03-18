import React from 'react';
import styles from './page.css';

const Page = props => (
  <div className={styles['component-container']}>
    {props.children}
  </div>
)

export default Page;