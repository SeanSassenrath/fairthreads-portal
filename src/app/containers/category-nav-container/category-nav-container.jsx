import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router';
import { fetchCategories } from '../../actions/category-actions';
import SideNavSection from '../../components/side-nav-section/side-nav-section';
import SideNavMainLink from '../../components/side-nav-main-link/side-nav-main-link';
import SideNavSubLink from '../../components/side-nav-sub-link/side-nav-sub-link';
import styles from './category-nav-container.css';

class CategoryNavContainer extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    const { gender } = this.props.match.params;

    console.log('--- Initial categories fetch');
    fetchCategories({ gender });
  }

  componentDidUpdate(prevProps) {
    const { fetchCategories } = this.props;
    const { gender } = this.props.match.params;
    const prevParams = prevProps.match.params;

    if (prevParams.gender !== gender) {
      console.log('--- Fetching new categories');
      fetchProducts({ gender });
    }
  }

  render() {
    const { categories } = this.props;
    const { gender } = this.props.match.params;
    return (
      <SideNavSection>
        { categories.types.map((type, index) => (
            <SideNavMainLink to={`/products/${gender}/${type.details.name}`} key={index}>
              {type.details.name}
            </SideNavMainLink>
        ))}
        { categories.types.subcategories
          ? categories.types.subcategories.map((subcategory, index) => {
            <SideNavSubLink to={`/products/${gender}/${type.details.name}/${subcategory.details.name}`} key={index}>
              {subcategory.details.name}
            </SideNavSubLink>})
          : null }
      </SideNavSection>
    )
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories };
}

const mapDispatchToProps = (dispatch) => {
  return { fetchCategories: bindActionCreators(fetchCategories(payload), dispatch) }
}

export default withRouter(connect(mapStateToProps, { fetchCategories })(CategoryNavContainer));

