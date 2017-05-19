import React, { PropTypes } from 'react';
import styles from './brand-list.css';

const propTypes = {
  brands: PropTypes.array,
  onClick: PropTypes.func
}

export const BrandList = ({ brands, onClick }) => (
  <div className={styles['brands-list-container']}>
    <div className={styles['brands-list']}>
      { brands.map(({details, products, updatedAt}, i) => {
          const updatedAtFormatted = new Date(updatedAt);
          return (
            <div key={i}>
              <label>
                <input value={i} type="radio" name="test" onChange={onClick} />
                {details.name}
              </label>
            </div>
            )
          })
      }
    </div>
  </div>
)