import React, { Component, PropTypes } from 'react';
import autobind from 'react-autobind';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import styles from './product-list-sub-nav.css';

export class ProductListSubNav extends Component {

  static propTypes = {
    brands: PropTypes.array,
    fetchBrandsByProducts: PropTypes.func
  }

  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      brandFilter: 'all'
    }
  }

  componentDidMount() {
    const { fetchBrandsByProducts } = this.props;
    let { gender, category } = this.props.match.params;
    fetchBrandsByProducts(category, gender);
  }

  componentDidUpdate(prevProps) {
    const { fetchBrandsByProducts } = this.props;
    let { gender, category } = this.props.match.params;
    const prevParams = prevProps.match.params;

    if (prevParams.gender !== gender || prevParams.category !== category) {
      fetchBrandsByProducts(category, gender);
    }
  }

  onBrandFilterChange(event, index, value) {
    this.setState({ brandFilter: value });
  }

  render() {
    const { brands } = this.props;

    return (
      <div className={styles['sub-nav-container']}>
        <DropDownMenu maxHeight={300} value={this.state.brandFilter} onChange={this.onBrandFilterChange}>
          <MenuItem value={'all'} primaryText={'Designers'} />
          { brands.map((brand, i) => (
              <MenuItem value={brand} primaryText={brand} key={i} />
          ))}
        </DropDownMenu>
        <DropDownMenu value={1} onChange={() => {}}>
          <MenuItem value={1} primaryText="Size" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
        <DropDownMenu value={1} onChange={() => {}}>
          <MenuItem value={1} primaryText="Color" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
      </div>
    )
  }
}