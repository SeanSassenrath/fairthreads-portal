import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getProductsByGenderAndType } from '../../reducers/root-reducer';
import { fetchProducts } from '../../actions/product-actions';
import ProductCard from '../../components/product-card/product-card';
import styles from './products-container.css';

class ProductsContainer extends Component {

  componentDidMount() {
    const { fetchProducts } = this.props;
    const { gender, category } = this.props.match.params;
    fetchProducts({ gender, category});
  }

  componentDidUpdate(prevProps) {
    const { fetchProducts } = this.props;
    const { gender, category } = this.props.match.params;
    const prevParams = prevProps.match.params;

    if (prevParams.gender !== gender || prevParams.category !== category) {
      fetchProducts({ gender, category });
    }
  }

  render() {
    const { products } = this.props;
    return (
      <div className={styles['products-container']}>
        { products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const { gender, category } = match.params;
  return {products: getProductsByGenderAndType(state, gender, 'categories', category )}
}

const mapDispatchToProps = (dispatch) => {
  return { fetchProducts: bindActionCreators(fetchProducts(payload), dispatch) }
}

// Use withRouter to convert router context to props
// Connect the Redux store to the ProductsContainer and pass in products state and actions
export default withRouter(connect(mapStateToProps, { fetchProducts })(ProductsContainer));