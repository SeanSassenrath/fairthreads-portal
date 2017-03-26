import React from 'react';
import classNames from 'classnames';
import styles from './search-bar.css';

const SearchBar = props => {
  const searchBarClass = classNames(props.className);
  return (
    <div className={searchBarClass}>
      <input type="text" placeholder={props.placeholder} className={styles['input']}/>
    </div>
  )
}

export default SearchBar;

