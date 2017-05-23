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
    updateProductByIdActive: PropTypes.func,
    isLoading: PropTypes.bool
  }

  constructor(props) {
    super(props)
    autobind(this);
  }

  componentDidMount() {
    const { fetchProducts, products } = this.props;
    const { brand } = queryString.parse(this.props.location.search);
    let { gender, category } = this.props.match.params;
    // Calculates product pagination based on the number of products available
    const page = this.props.products.length / pageLength;
    fetchProducts({ gender, category, page, brand });
  }

  componentDidUpdate(prevProps) {
    const prevSearch = queryString.parse(prevProps.location.search).brand;
    const currentSearch = queryString.parse(this.props.location.search).brand;
    const { fetchProducts } = this.props;
    let { gender, category } = this.props.match.params;
    // Calculates product pagination based on the number of products available
    const page = this.props.products.length / pageLength;
    const prevParams = prevProps.match.params;

    if (prevParams.gender !== gender || prevParams.category !== category || prevSearch !== currentSearch) {
      fetchProducts({ gender, category, page, currentSearch });
    }
  }

  renderWaypoint() {
    const { fetchProducts, products } = this.props;
    const { brand } = queryString.parse(this.props.location.search);
    const { gender, category } = this.props.match.params;
    const page = Math.ceil(products.length / pageLength) + 1;
    if (products.length > 0) {
      return <Waypoint onEnter={() => fetchProducts({ gender, category, page, brand })} />
    }
  }

  updateProductActive(product, e) {
    const { saveUpdatedProduct, updateProductByIdActive } = this.props;
    e.preventDefault();
    const updatedProduct = product;
    updatedProduct.metadata.active = !product.metadata.active;
    saveUpdatedProduct({
      product: updatedProduct, 
      id: updatedProduct._id,
    });
    updateProductByIdActive(product._id);
  }

  render() {
    const { products, saveUpdatedProduct, updateProductByIdActive, isLoading } = this.props;

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
                to={`/edit/product/${product.details.gender}/${product.categories !== null && product.categories.details 
                  ? product.categories.details.name 
                  : null}/${product._id}`
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