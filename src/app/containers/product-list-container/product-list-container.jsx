import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsLoading, getBrandsByProducts } from '../../reducers/root-reducer';
import { 
  fetchProducts, 
  updateProductByIdActive, 
  saveUpdatedProduct, 
  fetchBrandsByProducts
} from '../../actions/product-actions';
import { ProductList } from '../../components/product-list/product-list';
import { getFilteredProducts } from '../../selectors/product-selectors';

const mapStateToProps = (state, { match }) => {
  const { gender, category } = match.params;
  return {
    products: getFilteredProducts(state),
    brands: getBrandsByProducts(state),
    isLoading: getIsLoading(state)
  }
}

export const ProductListContainer = withRouter(connect(
  mapStateToProps, {
    fetchProducts, 
    fetchBrandsByProducts,
    updateProductByIdActive, 
    saveUpdatedProduct 
  })(ProductList)
);