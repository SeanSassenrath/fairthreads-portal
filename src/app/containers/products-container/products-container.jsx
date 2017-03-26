import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../../actions/product-actions';
import ProductCard from '../../components/product-card/product-card';
import styles from './products-container.css';

class ProductsContainer extends Component {

  componentDidMount() {
    const { fetchProducts } = this.props;
    const { gender, category } = this.props.match.params;

    console.log('--- Initial product fetch');
    fetchProducts({ gender, category});
  }

  componentDidUpdate(prevProps) {
    const { fetchProducts } = this.props;
    const { gender, category } = this.props.match.params;
    const prevParams = prevProps.match.params;

    if (prevParams.gender !== gender || prevParams.category !== category) {
      console.log('--- Fetching new products');
      fetchProducts({ gender, category });
    }
  }

  render() {
    const { items } = this.props.products;
    return (
      <div className={styles['products-container']}>
        { items.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {products: state.products};
}

const mapDispatchToProps = (dispatch) => {
  return { fetchProducts: bindActionCreators(fetchProducts(payload), dispatch) }
}

// Use withRouter to convert router context to props
// Connect the Redux store to the ProductsContainer and pass in products state and actions
export default withRouter(connect(mapStateToProps, { fetchProducts })(ProductsContainer));