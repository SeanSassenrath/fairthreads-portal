import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getProductById, getCategoriesById, getIsLoading } from '../../reducers/root-reducer';
import { 
  fetchProduct, 
  updateProductActive,
  updateProductName,
  updateProductGender,
  updateProductObjectFit, 
  updateProductCategory,
  saveUpdatedProduct ,
} from '../../actions/product-actions';
import { fetchCategories } from '../../actions/category-actions';
import { ProductEdit } from '../../components/product-edit/product-edit';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    product: getProductById(state, id),
    categories: getCategoriesById(state),
    isLoading: getIsLoading(state)
  }
}

export const ProductEditContainer = withRouter(
  connect(mapStateToProps, { 
    fetchProduct, 
    updateProductActive,
    updateProductName,
    updateProductGender,
    updateProductObjectFit,
    updateProductCategory,
    saveUpdatedProduct,
    fetchCategories
  })(ProductEdit));