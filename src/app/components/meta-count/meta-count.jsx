import React from 'react';
import styles from './meta-count.css';
import classNames from 'classnames';

const MetaCount = props => {
  const metaCountClass = classNames(props.className, styles['component-container']);
  return (
    <div {...props} className={metaCountClass}>
      <span className={styles['count']}>{props.count}</span>
      <div className={styles['label-container']}>
        <span className={styles['gender']}>{props.gender}</span>
        <span className={styles['type']}>{props.type}</span>
      </div>
    </div>
  )
}

export default MetaCount;