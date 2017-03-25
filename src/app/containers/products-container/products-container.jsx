import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../../actions/product-actions';
import styles from './products-container.css';

class ProductsContainer extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <h1 onClick={() => this.props.fetchProducts({ gender: this.props.match.params.gender, category: this.props.match.params.category })}>Test</h1>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state.productsReducer);
  return {products: state.productsReducer};
}

const mapDispatchToProps = (dispatch) => {
  return { fetchProducts: bindActionCreators(fetchProducts(payload), dispatch) }
}

// Use withRouter to convert router context to props
// Connect the Redux store to the ProductsContainer and pass in products state and actions
export default withRouter(connect(mapStateToProps, { fetchProducts })(ProductsContainer));