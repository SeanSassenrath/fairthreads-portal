import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './main-nav-link.css';

const MainNavLink = props => (
  <NavLink {...props} activeClassName={styles['active']} className={styles['default']}>
    <span>{props.children}</span>
  </NavLink>
)

// MainNavLink.propTypes = {
// }

export default MainNavLink;