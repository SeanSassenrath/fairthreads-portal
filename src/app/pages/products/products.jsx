import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import Page from '../../components/page/page';
import SubNav from '../../components/sub-nav/sub-nav';
import SideNav from '../../components/side-nav/side-nav';
import SideNavSection from '../../components/side-nav-section/side-nav-section';
import SideNavMainLink from '../../components/side-nav-main-link/side-nav-main-link';
import SideNavSubLink from '../../components/side-nav-sub-link/side-nav-sub-link';
import Button from '../../components/button/button';
import SearchBar from '../../components/search-bar/search-bar';
import MainContent from '../../components/main-content/main-content';
import styles from './products.css';

const Products = props => {
  console.log('props', props);
  const gender = props.match.params.gender;
  const type = props.match.params.type;

  return (
    <Page>
      <SubNav gender={gender} type={type}>
        <div className={styles.refresh}>
          <Button>Pull new products</Button>
        </div>
        <SearchBar placeholder="Search" className={styles['product-search']} />
      </SubNav>
      <div className={styles['content-container']}>
        <SideNav>
          <SideNavSection>
            <SideNavMainLink to={`/products/womens/${type}`}>Womens</SideNavMainLink>
            <SideNavMainLink to={`/products/mens/${type}`}>Mens</SideNavMainLink>
          </SideNavSection>
          <SideNavSection>
            <SideNavMainLink to={`/products/${gender}/categories`}>Categories</SideNavMainLink>
            <SideNavMainLink to={`/products/${gender}/subcategories`}>Subcategories</SideNavMainLink>
          </SideNavSection>
        </SideNav>
        <MainContent>
        </MainContent>
      </div>
    </Page>
  )
}

export default Products;