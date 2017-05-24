import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import styles from './side-nav-main-link.css';

class SideNavMainLink extends Component {

  constructor() {
    super();
    this.onCategoryFilterChange = this.onCategoryFilterChange.bind(this);
  }

  onCategoryFilterChange(event) {
    event.preventDefault();
    const { fetchProducts, history, products } = this.props; 
    const { gender } = this.props.match.params;
    const { id } = event.target;
    const searchParams = queryString.parse(this.props.location.search);
    searchParams.category = id;
    history.push({ search: queryString.stringify(searchParams)})
    // const page = products.length / pageLength;
    fetchProducts(gender, searchParams.category, searchParams.brand, 0);
  }

  render() {
    const { isActive, id, children, value } = this.props;
    return (
      <a href="#" 
        id={id} 
        activeClassName={styles['active']} 
        onClick={this.onCategoryFilterChange} 
        className={isActive ? styles['active'] : styles['default']}
      >
        {children}
      </a>
    )
  }
}

export const SideNavMainLinkWithRouter = withRouter(SideNavMainLink);