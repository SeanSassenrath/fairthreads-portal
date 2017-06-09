import React from 'react';
import classNames from 'classnames';
import styles from './sub-nav.css';

const SubNav = props => {
  const subNavClass = classNames(props.className, styles['component-container']);
  return (
    <div className={subNavClass}>
      <div className={styles['functional-container']}>
        {props.children}
      </div>
    </div>
  )
}

export default SubNav;