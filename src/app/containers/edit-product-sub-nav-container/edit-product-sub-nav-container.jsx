import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProductById } from '../../reducers/root-reducer';
import { ProductEditSubNav } from '../../components/product-edit-sub-nav/product-edit-sub-nav';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    product: getProductById(state, id)
  }
}

export const EditProductSubNavContainer = withRouter(
  connect(mapStateToProps, {})(ProductEditSubNav));

