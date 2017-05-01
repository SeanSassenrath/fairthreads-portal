import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';
const Waypoint = require('react-waypoint');
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getProductsByGenderAndType, getIsLoading } from '../../reducers/root-reducer';
import { fetchProducts } from '../../actions/product-actions';
import ProductCard from '../../components/product-card/product-card';
import styles from './products-container.css';

const pageLength = 36;

class ProductsContainer extends Component {

  constructor(props) {
    super(props)
    autobind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    const { gender, category } = this.props.match.params;
    console.log('category from params', category)
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

  renderWaypoint() {
    const { fetchProducts, products } = this.props;
    const { gender, category } = this.props.match.params;
    const page = (products.length / pageLength) + 1;
    if (products.length > 0) {
      return <Waypoint onEnter={() => fetchProducts({ gender, category, page })} />
    }
  }

  render() {
    const { products, isLoading } = this.props;

    return (
      <div className={styles['products-container']}>
        { products.map((product, index) => (
          <Link
            to={`/edit/product/${product.details.gender}/${product.categories !== null && product.categories.details ? product.categories.details.name : null}/${product._id}`} 
            className={styles['product-link']}
            key={index}>
              <ProductCard product={product} isLoading={isLoading} isActive={product.metadata.active} />
          </Link>
        ))}
        { this.renderWaypoint() }
      </div>
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const { gender, category } = match.params;
  return {
    products: getProductsByGenderAndType(state, gender, 'categories', category ),
    isLoading: getIsLoading(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchProducts: bindActionCreators(fetchProducts(payload), dispatch) }
}

// Use withRouter to convert router context to props
// Connect the Redux store to the ProductsContainer and pass in products state and actions
export default withRouter(connect(mapStateToProps, { fetchProducts })(ProductsContainer));