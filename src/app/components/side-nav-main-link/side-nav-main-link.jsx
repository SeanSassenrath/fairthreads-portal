import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './side-nav-main-link.css';

const SideNavMainLink = props => (
  <NavLink to={props.to} activeClassName={styles['active']} className={styles['default']}>
    {props.children}
  </NavLink>
);

export default SideNavMainLink;
