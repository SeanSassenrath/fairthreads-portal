import React from 'react';
import styles from './product-card.css';

const renderImgArea = props => {
  const { css, images, loading } = props.product;

  if (loading) {
    return (
      <div className={styles['image-container-loading']} />
    )
  }
  return (
    <div className={styles['image-container']}>
      <img
        src={images.imageOriginal}
        style={{ objectFit: css.objectFit }}
        role="presentation"
        className={styles.image}
      />
    </div>
  )
}

const ProductCard = props => {
  const { brand, details, prices } = props.product;
  const { isActive } = props;
  return (
    <div className={styles.container}>
      { renderImgArea(props) }
      <div>
        { isActive ? <div className={styles['active-indicator']} /> : null }
        <span className={styles.brand}>{brand.details.name}</span>
        <span className={styles.name}>{details.name}</span>
        {prices.salePrice
          ? <div className={styles['price-container']}>
              <span className={styles['old-price']}>{`$${Math.ceil(prices.price)}`}</span>
              <span>{`$${Math.ceil(prices.salePrice)}`}</span>
            </div>
          : <div className={styles['price-container']}>
              <span>{`$${Math.ceil(prices.price)}`}</span>
            </div>
          }
        </div>
    </div>
  )
}

export default ProductCard;