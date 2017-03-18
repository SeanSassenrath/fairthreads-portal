import React from 'react';
import styles from './sub-nav.css';

const SubNav = props => {
  <div className={styles['component-container']}>
    <MetaCount />
    <div className={styles['functional-container']}>
      <ButtonAdd>Add Category</ButtonAdd>
      <SearchBar />
    </div>
  </div>
}