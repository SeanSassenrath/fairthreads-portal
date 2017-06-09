import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router';
import autobind from 'react-autobind';
import queryString from 'query-string';
import { getCategoriesByGender } from '../../reducers/root-reducer';
import { fetchCategories } from '../../actions/category-actions';
import { fetchProducts } from '../../actions/product-actions';
import SideNavSection from '../../components/side-nav-section/side-nav-section';
import { SideNavMainLinkWithRouter } from '../../components/side-nav-main-link/side-nav-main-link';
import SideNavSubLink from '../../components/side-nav-sub-link/side-nav-sub-link';

class CategoryNavContainer extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  componentDidMount() {
    const { fetchCategories } = this.props;
    const { gender } = this.props.match.params;

    fetchCategories(gender);
  }

  componentDidUpdate(prevProps) {
    const { fetchCategories } = this.props;
    const { gender } = this.props.match.params;
    const prevParams = prevProps.match.params;

    if (prevParams.gender !== gender) {
      fetchCategories(gender);
    }
  }

  onCategoryFilterChange(event) {
    event.preventDefault();
    const { fetchProducts, history, products } = this.props; 
    const { gender } = this.props.match.params;
    const { id } = event.target;
    const searchParams = queryString.parse(this.props.location.search);
    
    if (!!id) {
      searchParams.category = id;
      history.push({ search: queryString.stringify(searchParams)})
    }
  }

  render() {
    const { categories, fetchProducts, type} = this.props;
    const { category } = queryString.parse(this.props.location.search);
    const { gender } = this.props.match.params;
    return (
      <SideNavSection>
        <SideNavMainLinkWithRouter 
          value={gender}
          id={'all'}
          isActive={category === 'all'}
          onClick={this.onCategoryFilterChange}
        >
          all
        </SideNavMainLinkWithRouter>
        { /*<SideNavMainLink 
          to={`/products/${gender}/uncategorized`} 
          isActive={category === 'uncategorized'}
        >
          uncategorized
        </SideNavMainLink>
        */}
        { categories.map((fetchedCategory, i) => {
          return (
            <SideNavMainLinkWithRouter 
              id={fetchedCategory.details.name}
              fetchProducts={fetchProducts}
              key={i}
              onClick={this.onCategoryFilterChange}
              isActive={fetchedCategory.details ? category === fetchedCategory.details.name : 'all'}
            >
              {fetchedCategory.details.name}
            </SideNavMainLinkWithRouter>
          )}
        )}
        {/*{ categories.categorys.subcategories
          ? categories.categorys.subcategories.map((subcategory, i) => {
            <SideNavSubLink to={`/products/${gender}/${category.details.name}/${subcategory.details.name}`} key={i}>
              {subcategory.details.name}
            </SideNavSubLink>})
          : null }*/}
      </SideNavSection>
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const { gender } = match.params;
  return { categories: getCategoriesByGender(state, gender) };
}

export default withRouter(connect(mapStateToProps, { fetchCategories, fetchProducts })(CategoryNavContainer));

