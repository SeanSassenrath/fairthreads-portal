import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProductListSubNav } from '../../components/product-list-sub-nav/product-list-sub-nav';
import { getBrandsByProducts } from '../../reducers/root-reducer';
import { fetchBrandsByProducts } from '../../actions/product-actions';

const mapStateToProps = (state, { match }) => {
  return {
    brands: getBrandsByProducts(state),
  }
}

export const ProductListSubNavContainer = withRouter(connect(
  mapStateToProps, {
    fetchBrandsByProducts,
  })(ProductListSubNav)
);