import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getProductById } from '../../reducers/root-reducer';
import { fetchProduct } from '../../actions/product-actions';
import ProductCard from '../../components/product-card/product-card';
import styles from './edit-product-container.css';

class EditProductContainer extends Component {

  constructor(args) {
    super(args);
    this.renderProduct = this.renderProduct.bind(this);
  }

  // Possibly need to fetch products incase not navigated to
  componentDidMount() {
    const { fetchProduct } = this.props;
    const { id } = this.props.match.params;
    fetchProduct(id);
  }

  componentDidUpdate(prevProps) {
    const { fetchProduct } = this.props;
    const { id } = this.props.match.params;
    const prevParams = prevProps.match.params;

    if (prevParams.id !== id) {
      fetchProduct(id);
    }
  }

  renderProduct() {
    const { product } = this.props;
    const updatedAt = new Date(product.updatedAt);
    const createdAt = new Date(product.createdAt);

    return (
      <div className={styles['edit-product-container']}>
        <div className={styles['edit-product']}>
          <ProductCard product={product} />
          <div>
            <div className={styles['product-details']}>
              <input type="text" placeholder={product.details.name} />
              <span>Brand: {product.brand.details.name}</span>
              <span>id: {product._id}</span>
              <span>Updated At: {updatedAt.toDateString()}</span>
              <span>Created At: {createdAt.toDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { product } = this.props;
    return (
      product.details
      ? this.renderProduct()
      : null
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const x = getProductById(state);
  console.log('mapStateToProps', x);
  return { product: getProductById(state) }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    fetchProduct: bindActionCreators(fetchProduct(payload), dispatch)
  }
}

// Use withRouter to convert router context to props
// Connect the Redux store to the EditProductContainer and pass in products state and actions
export default withRouter(connect(mapStateToProps, { fetchProduct })(EditProductContainer));