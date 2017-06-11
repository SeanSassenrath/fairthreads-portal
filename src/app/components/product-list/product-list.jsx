import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import autobind from 'react-autobind';
import queryString from 'query-string';
import Checkbox from '../checkbox/checkbox';
import ProductCard from '../product-card/product-card';
import styles from './product-list.css';
const Waypoint = require('react-waypoint');

const pageLength = 36;

export class ProductList extends Component {

  static propTypes = {
    products: PropTypes.array,
    saveUpdatedProduct: PropTypes.func,
    isLoading: PropTypes.bool
  }

  constructor(props) {
    super(props)
    autobind(this);
  }

  componentDidMount() {
    const { fetchProducts, history, products } = this.props; 
    const { gender } = this.props.match.params;
    const searchParams = queryString.parse(this.props.location.search);
    // const page = products.length / pageLength;
    fetchProducts(gender, searchParams.category, searchParams.brand, 0);

    // Calculates product pagination based on the number of products available
    // const page = this.props.products.length / pageLength;
  }

  componentDidUpdate(prevProps) {
    const { fetchProducts } = this.props;
    const currentSearch = queryString.parse(this.props.location.search);
    let { gender } = this.props.match.params;
    // Calculates product pagination based on the number of products available
    const page = this.props.products.length / pageLength;
    if (prevProps.location.search !== this.props.location.search || prevProps.match.params.gender !== gender) {
      fetchProducts(gender, currentSearch.category, currentSearch.brand, page );
    }
  }

  renderWaypoint() {
    const { fetchProducts, products } = this.props;
    const currentSearch = queryString.parse(this.props.location.search);
    const { gender } = this.props.match.params;
    const page = Math.ceil(products.length / pageLength) + 1;
    if (products.length > 0) {
      return <Waypoint onEnter={() => fetchProducts(gender, currentSearch.category, currentSearch.brand, page)} />
    }
  }

  updateProductActive(product, e) {
    const { saveUpdatedProduct } = this.props;
    e.preventDefault();
    const updatedProduct = product;
    updatedProduct.metadata.active = !product.metadata.active;
    saveUpdatedProduct({
      product: updatedProduct, 
      id: updatedProduct._id,
    });
  }

  render() {
    const { products, saveUpdatedProduct, isLoading } = this.props;

    return (
      <div className={styles['product-list']}>
        { products.map((product, i) => (
          <div className={styles['product-container']} key={i}>
            <Checkbox 
              checked={product.metadata.active}
              onChange={(e) => this.updateProductActive(product, e)}
            >
              Active
            </Checkbox>
            <div className={styles['product']}>
              <Link
                className={styles['product-link']}
                to={`/edit/product/${product.details.gender}/${product._id}`
                } 
              >
                <ProductCard product={product} isLoading={isLoading} isActive={product.metadata.active} />
              </Link>
            </div>
          </div>
        ))}
        { this.renderWaypoint() }
      </div>
    )
  }
}