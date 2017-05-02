import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router';
import { getCategoriesByGender } from '../../reducers/root-reducer';
import { fetchCategories } from '../../actions/category-actions';
import SideNavSection from '../../components/side-nav-section/side-nav-section';
import SideNavMainLink from '../../components/side-nav-main-link/side-nav-main-link';
import SideNavSubLink from '../../components/side-nav-sub-link/side-nav-sub-link';
import styles from './category-nav-container.css';

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
    const { categories, type} = this.props;
    const { gender, category } = this.props.match.params;
    return (
      <SideNavSection>
        <SideNavMainLink 
          to={`/products/${gender}/all`} 
          isActive={category === 'all'}
        >
          all
        </SideNavMainLink>
        { categories.map((fetchedCategory, i) => (
            <SideNavMainLink 
              to={`/${type}/${gender}/${fetchedCategory.details.name}`} 
              key={i} 
              isActive={fetchedCategory.details.name === category}
            >
              {fetchedCategory.details.name}
            </SideNavMainLink>
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

const mapDispatchToProps = (dispatch) => {
  return { fetchCategories: bindActionCreators(fetchCategories(payload), dispatch) }
}

export default withRouter(connect(mapStateToProps, { fetchCategories })(CategoryNavContainer));

