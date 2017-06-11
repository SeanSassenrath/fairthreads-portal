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

export class ProductEditContainer extends Component {

  componentDidMount() {
    if (!this.props.product.id) {
      console.log('!this.props.product', !this.props.product)
      const { id } = this.props.match.params;
      this.props.fetchProduct(id); 
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.product.id) {
      const { id, gender } = this.props.match.params;
      const prevParams = prevProps.match.params;

      if (prevProps.product.details !== this.props.product.details) { 
        this.props.fetchCategories(gender); 
      }

      if (prevParams.id !== id) {
        this.props.fetchProduct(id);
      }
    }
  }

  render() {
    return (
      <ProductEdit {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    product: getProductById(state, id) || {},
    categories: getCategoriesById(state),
    isLoading: getIsLoading(state)
  }
}

ProductEditContainer = withRouter(
  connect(mapStateToProps, { 
    fetchProduct, 
    updateProductActive,
    updateProductName,
    updateProductGender,
    updateProductObjectFit,
    updateProductCategory,
    saveUpdatedProduct,
    fetchCategories
  })(ProductEditContainer));