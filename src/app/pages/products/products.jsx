import React from 'react';
import Page from '../../components/page/page';
import SubNav from '../../components/sub-nav/sub-nav';
import SideNav from '../../components/side-nav/side-nav';
import SideNavSection from '../../components/side-nav-section/side-nav-section';
import SideNavMainLink from '../../components/side-nav-main-link/side-nav-main-link';
import SideNavSubLink from '../../components/side-nav-sub-link/side-nav-sub-link';
import { ButtonAdd }  from '../../components/button/button';
import SearchBar from '../../components/search-bar/search-bar';
import MainContent from '../../components/main-content/main-content';
import styles from './products.css';

const Products = props => {
  console.log('products', props)
  const { gender, category, subcategory } = props.match.params;

  return (
    <Page>
      <SubNav gender={gender} type={category || subcategory}>
        <SearchBar placeholder="Search" className={styles['product-search']}/>
      </SubNav>
      <div>
        <SideNav>
          <SideNavSection>
            <SideNavMainLink to={`/products/womens/${category}/${subcategory}`}>Womens</SideNavMainLink>
            <SideNavMainLink to={`/products/mens/${category}/${subcategory}`}>Mens</SideNavMainLink>
          </SideNavSection>
        </SideNav>
        <MainContent> 
        </MainContent>
      </div>
    </Page>
  )
}

export default Products;