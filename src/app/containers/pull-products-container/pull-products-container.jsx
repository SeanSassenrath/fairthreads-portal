import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pullProducts } from '../../actions/dashboard-actions';
import Button from '../../components/button/button';

const PullProducts = props => (
  <Button onClick={props.pullProducts}>
    Pull Products
  </Button>
)

export default connect(null, { pullProducts })(PullProducts);