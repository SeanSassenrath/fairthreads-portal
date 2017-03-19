import React from 'react';
import classNames from 'classnames';
import styles from './search-bar.css';

const SearchBar = props => {
  const searchBarClass = classNames(props.className);
  console.log('search bar props', props)
  return (
    <div className={searchBarClass}>
      <input type="text" placeholder={props.placeholder} className={styles['input']}/>
    </div>
  )
}

export default SearchBar;

