import React, { Component, PropTypes } from 'react';
import MainNavLink from '../main-nav-link/main-nav-link';
import styles from './main-nav.css';

const MainNav = () => (
  <nav className={styles['component-container']}>
    <h1 className={styles['logo']}>Fairthreads</h1>
    <ul className={styles['nav-container']}>
      <li>
        <MainNavLink to='/dashboard'>Dashboard</MainNavLink>
      </li>
      <li>
        <MainNavLink to='/products'>Products</MainNavLink>
      </li>
      <li>
        <MainNavLink to='/categories/womens/categories'>Categories</MainNavLink>
      </li>
      <li>
        <MainNavLink to='/brands'>Brands</MainNavLink>
      </li>
    </ul>
  </nav>
)

// MainNav.propTypes = {

// }

export default MainNav;