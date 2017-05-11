import React from 'react';
import styles from './product-card.css';

const renderImgArea = props => {
  const { isLoading, product } = props;

  if (isLoading) {
    return (
      <div className={styles['image-container-loading']} />
    )
  }
  return (
    <div className={styles['image-container']}>
      <img
        src={product.images.imageOriginal}
        style={{ objectFit: product.css.objectFit }}
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