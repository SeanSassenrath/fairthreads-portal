import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsByGenderAndType, getIsLoading } from '../../reducers/root-reducer';
import { fetchProducts, updateProductByIdActive, saveUpdatedProduct, fetchBrandsByProducts } from '../../actions/product-actions';
import { ProductList } from '../../components/product-list/product-list';

const mapStateToProps = (state, { match }) => {
  const { gender, category } = match.params;
  return {
    products: getProductsByGenderAndType(state, gender, 'categories', category),
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