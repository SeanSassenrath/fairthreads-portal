import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/page/page';
import EditProductSubNavContainer from '../../containers/edit-product-sub-nav-container/edit-product-sub-nav-container';
import SideNav from '../../components/side-nav/side-nav';
import SideNavSection from '../../components/side-nav-section/side-nav-section';
import SideNavMainLink from '../../components/side-nav-main-link/side-nav-main-link';
import SideNavSubLink from '../../components/side-nav-sub-link/side-nav-sub-link';
import Button from '../../components/button/button';
import CategoryNavContainer from '../../containers/category-nav-container/category-nav-container';
import EditProductContainer from '../../containers/edit-product-container/edit-product-container';
import MainContent from '../../components/main-content/main-content';
import styles from './edit-product.css';

class EditProduct extends Component {

  render() {
    const { gender } = this.props.match.params;
    return (
      <Page>
        <EditProductSubNavContainer />
        <div className={styles['content-container']}>
          <SideNav>
            <SideNavSection>
              <SideNavMainLink 
                to={`/products/womens/tops`} 
                isActive={gender === 'womens'}
              >
                Womens
              </SideNavMainLink>
              <SideNavMainLink 
                to={`/products/mens/tops`}
                isActive={gender === 'mens'}
              >
                Mens
              </SideNavMainLink>
            </SideNavSection>
            <CategoryNavContainer />
          </SideNav>
          <MainContent>
            <EditProductContainer />
          </MainContent>
        </div>
      </Page>
    )
  }
}

export default EditProduct;