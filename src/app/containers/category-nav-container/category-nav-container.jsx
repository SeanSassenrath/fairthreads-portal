import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router';
import { getCategoriesByGender } from '../../reducers/root-reducer';
import { fetchCategories } from '../../actions/category-actions';
import { fetchProducts } from '../../actions/product-actions';
import SideNavSection from '../../components/side-nav-section/side-nav-section';
import { SideNavMainLinkWithRouter } from '../../components/side-nav-main-link/side-nav-main-link';
import SideNavSubLink from '../../components/side-nav-sub-link/side-nav-sub-link';

class CategoryNavContainer extends Component {
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

  render() {
    const { categories, fetchProducts, type} = this.props;
    const { gender, category } = this.props.match.params;
    return (
      <SideNavSection>
        <SideNavMainLinkWithRouter 
          value={gender}
          isActive={category === 'all'}
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
        { categories.map((fetchedCategory, i) => (
            <SideNavMainLinkWithRouter 
              id={fetchedCategory.details.name}
              fetchProducts={fetchProducts}
              key={i} 
            >
              {fetchedCategory.details.name}
            </SideNavMainLinkWithRouter>
        ))}
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

