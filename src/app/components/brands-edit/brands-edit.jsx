import React, { Component, PropTypes } from 'react';
import autobind from 'react-autobind';
import { omit } from 'lodash';
import { BrandList } from '../brand-list/brand-list';
import { BrandEditPanel } from '../brand-edit-panel/brand-edit-panel';
import styles from './brands-edit.css';

export class BrandsEdit extends Component {
  
  static propTypes = {
    brands: PropTypes.array,
    fetchBrands: PropTypes.func
  }

  constructor(props) {
    super(props)
    autobind(this);
    this.state = {
      id: null,
      name: null,
      description: null,
      image: null,
    }
  }

  componentDidMount() {
    this.props.fetchBrands();
  }

  onClick(e) {
    const brand = this.props.brands[e.target.value];

    this.setState({ 
      id: brand._id,
      name: brand.details.name,
      description: brand.details.description,
      image: brand.details.image
    });
  }

  onSaveUpdatedBrand() {
    this.props.saveUpdatedBrand({ id: this.state.id, brand: { details: omit(this.state, 'id') } });
  }

  updateBrandField(type, e) {
    const changes = {};
    changes[type] = e.target.value;
    const newState = Object.assign(this.state, changes);
    this.setState(newState)
  }

  render() {
    const { brands } = this.props;
    const { name, image, description } = this.state;
    return (
      <div className={styles['brands-edit']}>
        <BrandList brands={brands} onClick={this.onClick} />
        <BrandEditPanel 
          name={name} 
          image={image}
          description={description}
          updateBrandField={this.updateBrandField}
          onSaveUpdatedBrand={this.onSaveUpdatedBrand}
        />
      </div>
    )
  }
}