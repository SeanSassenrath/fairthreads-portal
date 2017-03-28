import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/page/page';
import SubNav from '../../components/sub-nav/sub-nav';
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
    return (
      <Page>
        <SubNav>
          <div className={styles['left-sub-nav-container']}>
            <Link to="/">
              Back
            </Link>
            <div className={styles.refresh}>
              <Button>Delete product</Button>
            </div>
            <div className={styles.refresh}>
              <Button>Cancel changes</Button>
            </div>
          </div>
          <div className={styles.refresh}>
            <Button>Save changes</Button>
          </div>
        </SubNav>
        <div className={styles['content-container']}>
          <SideNav>
            <SideNavSection>
              <SideNavMainLink to={`/`}>Womens</SideNavMainLink>
              <SideNavMainLink to={`/`}>Mens</SideNavMainLink>
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