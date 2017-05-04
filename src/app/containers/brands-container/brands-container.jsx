import React, { Component, PropTypes } from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBrands } from '../../reducers/root-reducer';
import { fetchBrands } from '../../actions/brand-actions';
import ProductCard from '../../components/product-card/product-card';
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
    const brand = brands[e];
    this.setState({ 
      id: brand._id,
      name: brand.details.name,
      description: brand.details.description,
      image: brand.details.image
    });
  }

  onChange(e) {
    this.setState({ name: e.target.value })
  }

  renderTableRows() {
    const { brands } = this.props;
    return (
      brands.map(({details, products, updatedAt}, i) => {
        const updatedAtFormatted = new Date(updatedAt);
        return (
          <TableRow key={i}>
            <TableRowColumn>{details.name}</TableRowColumn>
            <TableRowColumn>{products.length}</TableRowColumn>
            <TableRowColumn>{updatedAtFormatted.toDateString()}</TableRowColumn>
          </TableRow>
        )
      })
    )
  }

  render() {
    const { brands } = this.props;

    return (
      <div className={styles['brands']}>
        <div className={styles['brands-table-container']}>
          <div className={styles['brands-table']}>
            <Table onCellClick={this.onCellClick}>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Brands</TableHeaderColumn>
                  <TableHeaderColumn># of Products</TableHeaderColumn>
                  <TableHeaderColumn>Last Updated</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                { this.renderTableRows() }
              </TableBody>
            </Table>
          </div>
        </div>
        <div>
          <div className={styles['brand-text-field-container']}>
            <TextField
              id="brand-name"
              disabled={!this.state.name}
              floatingLabelText="Brand name"
              value={this.state.name || "Brand Name"}
              onChange={this.onChange}
            />
          </div>
          <div className={styles['brand-text-field-container']}>
            <TextField
              id="brand-image"
              disabled={!this.state.name}
              floatingLabelText="Brand image"
              value={this.state.image}
              hintText={"Brand image"}
              onChange={this.onChange}
            />
          </div>
          <textarea 
            disabled={!this.state.name}
            className={styles['brand-description']}
          >
            {this.state.description || "Brand description"}
          </textarea>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { brands: getAllBrands(state) }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchBrands: bindActionCreators(fetchBrands(payload), dispatch) }
}

// Connect the Redux store to the ProductsContainer and pass in products state and actions
export default connect(mapStateToProps, { fetchBrands })(BrandsContainer);