import React from 'react';
import styles from './search-bar.css';

const SearchBar = props => (
  <div {...props}>
    <input type="text" placeholder={props.placeholder} className={styles['input']}/>
  </div>
)

export default SearchBar;

