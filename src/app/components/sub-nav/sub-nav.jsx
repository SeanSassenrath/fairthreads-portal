import React from 'react';
import styles from './sub-nav.css';

const SubNav = props => {
  <div className={styles['component-container']}>
    <MetaCount />
    <div className={styles['functional-container']}>
      <AddButton>Add Category</AddButton>
      <SearchBar />
    </div>
  </div>
}