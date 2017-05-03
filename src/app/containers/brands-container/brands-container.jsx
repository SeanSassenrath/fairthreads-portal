import React, { Component, PropTypes } from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBrands } from '../../reducers/root-reducer';
import { fetchBrands } from '../../actions/brand-actions';
import ProductCard from '../../components/product-card/product-card';
import styles from './brands-container.css';
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
  }

  componentDidMount() {
    const { fetchBrands } = this.props;
    fetchBrands();
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
      <div>
        <Table>
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