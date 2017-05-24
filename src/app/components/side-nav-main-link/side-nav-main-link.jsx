import React, { Component, PropTypes } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import styles from './side-nav-main-link.css';

class SideNavMainLink extends Component {

  render() {
    const { isActive, onClick, id, children, value, to } = this.props;
    return (
      <NavLink 
        to={to || ''}
        id={id}
        onClick={onClick}
        activeClassName={styles['active']} 
        className={isActive ? styles['active'] : styles['default']}
      >
        {children}
      </NavLink>
    )
  }
}

export const SideNavMainLinkWithRouter = withRouter(SideNavMainLink);