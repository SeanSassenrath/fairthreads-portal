import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './side-nav-sub-link.css';

const SideNavSubLink = props => (
  <NavLink to={props.to}>
    {props.children}
  </NavLink>
);

export default SideNavSubLink;

