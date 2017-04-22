import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getProductsByGenderAndType } from '../../reducers/root-reducer';
import { fetchProducts } from '../../actions/product-actions';
import ProductCard from '../../components/product-card/product-card';
import styles from './products-container.css';

const pageLength = 36;

class ProductsContainer extends Component {

  componentDidMount() {
    const { fetchProducts } = this.props;
    const { gender, category } = this.props.match.params;
    // Calculates product pagination based on the number of products available
    const page = this.props.products.length / pageLength;
    fetchProducts({ gender, category, page });
  }

  componentDidUpdate(prevProps) {
    const { fetchProducts } = this.props;
    const { gender, category } = this.props.match.params;
    // Calculates product pagination based on the number of products available
    const page = this.props.products.length / pageLength;
    const prevParams = prevProps.match.params;

    if (prevParams.gender !== gender || prevParams.category !== category) {
      fetchProducts({ gender, category, page });
    }
  }

  render() {
    const { products } = this.props;
    return (
      <div className={styles['products-container']}>
        { products.map((product, index) => (
          <Link 
            to={`/edit/product/${product.details.gender}/${product.categories.details.name}/${product._id}`} 
            className={styles['product-link']} 
            key={index}>
              <ProductCard product={product} isActive={product.metadata.active} />
          </Link>
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