import React from 'react';
import MetaCount from '../../components/meta-count/meta-count';
import SearchBar from '../../components/search-bar/search-bar';
import { ButtonAdd } from '../../components/button/button';
import styles from './sub-nav.css';

const SubNav = props => (
  <div className={styles['component-container']}>
    <MetaCount count={9} gender={props.gender} type={props.type} className={styles['meta-count-container']}/>
    <div className={styles['functional-container']}>
      <div className={styles['button-container']}>
        <ButtonAdd>Add Category</ButtonAdd>
      </div>
      <SearchBar placeholder="Search" className={styles['search-bar-container']} />
    </div>
  </div>
)

export default SubNav;