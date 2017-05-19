import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getAllBrands } from '../../reducers/root-reducer';
import { fetchBrands, saveUpdatedBrand } from '../../actions/brand-actions';
import { BrandsEdit } from '../../components/brands-edit/brands-edit';

const mapStateToProps = (state) => {
  return { brands: getAllBrands(state) }
}

export const BrandsContainer = connect(mapStateToProps, { fetchBrands, saveUpdatedBrand })(BrandsEdit);