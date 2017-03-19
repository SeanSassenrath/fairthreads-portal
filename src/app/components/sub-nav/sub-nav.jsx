import React from 'react';
import MetaCount from '../../components/meta-count/meta-count';
import classNames from 'classnames';
import styles from './sub-nav.css';

const SubNav = props => {
  const subNavClass = classNames(props.className, styles['component-container']);
  return (
    <div className={subNavClass}>
      <MetaCount count={9} gender={props.gender} type={props.type} className={styles['meta-count-container']}/>
      <div className={styles['functional-container']}>
        {props.children}
      </div>
    </div>
  )
}

export default SubNav;