import React, { Component, PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './main-nav.css';

const MainNav = () => (
  <div className={styles['component-container']}>
    <h1 className={styles['logo']}>Fairthreads</h1>
    <nav className={styles['nav-container']}>
      <NavLink to='/dashboard'>
        <h2>Dashboard</h2>
      </NavLink>
      <NavLink to='/products'>
        <h2>Products</h2>
      </NavLink>
      <NavLink to='/categories'>
        <h2>Categories</h2>
      </NavLink>
      <NavLink to='/brands'>
        <h2>Brands</h2>
      </NavLink>
    </nav>
  </div>
)

// MainNav.propTypes = {

// }

export default MainNav;