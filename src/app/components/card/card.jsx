import React from 'react';
import styles from './card.css';

const Card = props => {

  return (
    <div className={styles['component-container']}>
      {props.children}
    </div>
  )
};

export default Card;