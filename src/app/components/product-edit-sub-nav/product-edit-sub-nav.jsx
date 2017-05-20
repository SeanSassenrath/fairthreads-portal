import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import SubNav from '../sub-nav/sub-nav';
import FlatButton from 'material-ui/FlatButton';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import styles from './product-edit-sub-nav.css';

const propTypes = {
  history: PropTypes.object,
  product: PropTypes.object
}

const goBack = history => {
  history.goBack();
}

export const ProductEditSubNav = ({ product, history }) => {
  const updatedAt = new Date(product.updatedAt);
  const createdAt = new Date(product.createdAt);
  return (
    <SubNav>
      <div className={styles['left-sub-nav-container']}>
        <FlatButton
          label="Back"
          primary={true}
          icon={<KeyboardArrowLeft />}
          onClick={() => goBack(history)}
        />
        <div className={styles['meta-info-container']}>
          <span>id: {product._id}</span>
          <span>Updated At: {updatedAt.toDateString()}</span>
          <span>Created At: {createdAt.toDateString()}</span>
        </div>
      </div>
    </SubNav>
  )
}