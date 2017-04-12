import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getProductById, getCategoriesById } from '../../reducers/root-reducer';
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
import autoBind from 'react-autobind';
import ProductCard from '../../components/product-card/product-card';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { omit, toArray } from 'lodash';
import styles from './edit-product-container.css';

class EditProductContainer extends Component {

  constructor(args) {
    super(args);
    autoBind(this);
  }

  // Possibly need to fetch products incase not navigated to
  componentDidMount() {
    const { fetchProduct } = this.props;
    const { id } = this.props.match.params;
    fetchProduct(id);
  }

  componentDidUpdate(prevProps) {
    const { fetchProduct, fetchCategories, product } = this.props;
    const { id } = this.props.match.params;
    const prevParams = prevProps.match.params;

    if (prevProps.product.details !== this.props.product.details) { fetchCategories(product.details.gender); }

    if (prevParams.id !== id) {
      fetchProduct(id);
    }
  }

  setName(event, value) {
    this.props.updateProductName(value);
  }

  setGender(event, index, value) {
    const { product, updateProductGender } = this.props;
    if (value !== product.details.gender) {
      updateProductGender(value);
    }
    return;
  }

  isObjectCover() {
    return this.props.product.css.objectFit === 'cover';
  }

  setObjectFit() {
    const { product, updateProductObjectFit } = this.props;
    const objectFit = product.css.objectFit === 'contain' ? 'cover' : 'contain';
    updateProductObjectFit(objectFit);
  }

  renderCategorySelect() {
    const { product, categories } = this.props;
    const gender = product.details.gender;
    const categoriesArray = toArray(categories);
    const categoriesByGender = categoriesArray.filter(category => (
      category.details.gender === gender || 'both'
    ))

    return (
      <SelectField value={product.categories._id} onChange={this.setCategory}>
        { categoriesByGender.map((category, i) => (
          <MenuItem
            value={category._id}
            primaryText={category.details.name.charAt(0).toUpperCase() + category.details.name.slice(1)} 
            key={i}
          />
        ))}
      </SelectField>
    )
  }

  setCategory(event, index, value) {
    const { product, categories, updateProductCategory } = this.props;
    const gender = product.details.gender;
    const categoriesArray = toArray(categories);
    if (value !== product.categories) {
      updateProductCategory(categoriesArray[index]);
    }
    return;
  }

  renderProduct() {
    const { categories, product, updateProductActive, saveUpdatedProduct } = this.props;
    const updatedAt = new Date(product.updatedAt);
    const createdAt = new Date(product.createdAt);

    return (
      <div className={styles['edit-product-container']}>
        <div className={styles['edit-product']}>
          <ProductCard product={product} />
          <div className={styles['edit-product-details']}>

            <div className={styles['product-metadata']}>
              <TextField hintText={product.details.name} onChange={this.setName}/>
              <span>Brand: {product.brand.details.name}</span>
              <span>id: {product._id}</span>
              <span>Updated At: {updatedAt.toDateString()}</span>
              <span>Created At: {createdAt.toDateString()}</span>
            </div>

            <div className={styles['product-actions']}>
              <div className={styles['toggle-container']}>
                <span>Active:</span>
                <div>
                  <Toggle toggled={product.metadata.active} onToggle={updateProductActive} />
                </div>
              </div>
              <div className={styles['toggle-container']}>
                <span>Stylist Pick:</span>
                <div>
                  <Toggle disabled />
                </div>
              </div>
              <div className={styles['toggle-container']}>
                <span>Featured:</span>
                <div>
                  <Toggle disabled />
                </div>
              </div>
              <div className={styles['toggle-container']}>
                <span>Img Cover:</span>
                <div>
                 <Toggle toggled={this.isObjectCover()} onToggle={this.setObjectFit} />
                </div>
              </div>
            </div>

            <div className={styles['product-actions']}>
              <div>
                <SelectField value={product.details.gender} onChange={this.setGender}>
                  <MenuItem value='womens' primaryText='Womens' />
                  <MenuItem value='mens' primaryText='Mens' />
                </SelectField>
              </div>
            </div>

            <div className={styles['product-actions']}>
              <div>
                { this.renderCategorySelect() }
              </div>
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

const mapStateToProps = (state) => {
  const x = getProductById(state);
  return {
    product: getProductById(state),
    categories: getCategoriesById(state)
  }
}

// Use withRouter to convert router context to props
// Connect the Redux store to the EditProductContainer and pass in products state and actions
export default withRouter(
  connect(mapStateToProps, { 
    fetchProduct, 
    updateProductActive,
    updateProductName,
    updateProductGender,
    updateProductObjectFit,
    updateProductCategory,
    saveUpdatedProduct,
    fetchCategories
  })(EditProductContainer));