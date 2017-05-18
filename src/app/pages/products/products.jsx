import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import Page from '../../components/page/page';
import SideNav from '../../components/side-nav/side-nav';
import SideNavSection from '../../components/side-nav-section/side-nav-section';
import SideNavMainLink from '../../components/side-nav-main-link/side-nav-main-link';
import SideNavSubLink from '../../components/side-nav-sub-link/side-nav-sub-link';
import Button from '../../components/button/button';
import SearchBar from '../../components/search-bar/search-bar';
import MainContent from '../../components/main-content/main-content';
import { ProductListContainer } from '../../containers/product-list-container/product-list-container';
import CategoryNavContainer from '../../containers/category-nav-container/category-nav-container';
import styles from './products.css';

const Products = props => {
  const gender = props.match.params.gender;
  const category = props.match.params.category;

  return (
    <Page>
      <div className={styles['content-container']}>
        <SideNav>
          <SideNavSection>
            <SideNavMainLink to={`/products/womens/${category}`}>Womens</SideNavMainLink>
            <SideNavMainLink to={`/products/mens/${category}`}>Mens</SideNavMainLink>
          </SideNavSection>
          <CategoryNavContainer type={'products'} />
        </SideNav>
        <MainContent>
          <ProductListContainer />
        </MainContent>
      </div>
    </Page>
  )
}

export default Products;