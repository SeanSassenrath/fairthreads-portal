import React from 'react';
import styles from './product.css';

const Product = props => {
  return (
    <div className={styles['component-container']}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <div>
          <span>Brand</span>
          <span>Name</span>
          <div>
            <span>Sale</span>
            <span>Price</span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Product;