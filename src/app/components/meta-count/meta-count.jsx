import React from 'react';
import styles from './meta-count.css';

const MetaCount = props => (
  <div {...props} className={styles['component-container']}>
    <span className={styles['count']}>{props.count}</span>
    <div className={styles['label-container']}>
      <span className={styles['gender']}>{props.gender}</span>
      <span className={styles['type']}>{props.type}</span>
    </div>
  </div>
)

export default MetaCount;