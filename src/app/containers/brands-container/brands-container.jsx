import React, { Component, PropTypes } from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBrands } from '../../reducers/root-reducer';
import { fetchBrands, saveUpdatedBrand } from '../../actions/brand-actions';
import Button from '../../components/button/button';
import styles from './brands-container.css';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { omit } from 'lodash';

class BrandsContainer extends Component {

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
    const { fetchBrands } = this.props;
    fetchBrands();
  }

  onCellClick(e) {
    const { brands } = this.props;
    const brand = brands[e.target.value];
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

  renderTableRows() {
    const { brands } = this.props;
    return (
      brands.map(({details, products, updatedAt}, i) => {
        const updatedAtFormatted = new Date(updatedAt);
        return (
          <div key={i}>
            <label>
              <input value={i} type="radio" name="test" onChange={this.onCellClick} />
              {details.name}
            </label>
          </div>
        )
      })
    )
  }

  saveUpdatedBrand

  render() {
    const { brands, saveUpdatedBrand } = this.props;

    return (
      <div className={styles['brands']}>
        <div className={styles['brands-table-container']}>
          <div className={styles['brands-table']}>
            { this.renderTableRows() }
          </div>
        </div>
        <div>
          <div className={styles['brand-text-field-container']}>
            <TextField
              id="brand-name"
              disabled={!this.state.name}
              floatingLabelText="Brand name"
              value={this.state.name || "Brand Name"}
              onChange={e => this.updateBrandField('name', e)}
            />
          </div>
          <div className={styles['brand-text-field-container']}>
            <TextField
              id="brand-image"
              disabled={!this.state.name}
              floatingLabelText="Brand image"
              value={this.state.image || ""}
              onChange={e => this.updateBrandField('image', e)}
            />
          </div>
          <div>
            <textarea 
              disabled={!this.state.name}
              className={styles['brand-description']}
              value={this.state.description || "Brand description"}
              onChange={e => this.updateBrandField('description', e)}
            />
          </div>
          <Button onClick={this.onSaveUpdatedBrand}>
            Save
          </Button>
          <a href="#">
            Cancel
          </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { brands: getAllBrands(state) }
}

// Connect the Redux store to the ProductsContainer and pass in products state and actions
export default connect(mapStateToProps, { fetchBrands, saveUpdatedBrand })(BrandsContainer);