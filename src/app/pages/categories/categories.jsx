import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import Page from '../../components/page/page';
import SubNav from '../../components/sub-nav/sub-nav';
import SideNav from '../../components/side-nav/side-nav';
import SideNavSection from '../../components/side-nav-section/side-nav-section';
import SideNavMainLink from '../../components/side-nav-main-link/side-nav-main-link';
import SideNavSubLink from '../../components/side-nav-sub-link/side-nav-sub-link';
import { ButtonAdd }  from '../../components/button/button';
import SearchBar from '../../components/search-bar/search-bar';
import MainContent from '../../components/main-content/main-content';
import Card from '../../components/card/card';
import styles from './categories.css';

const Categories = props => {
  console.log('props', props);
  const gender = props.match.params.gender;
  const type = props.match.params.type;

  return (
    <Page>
      <SubNav gender={gender} type={type}>
        <div className={styles['add-category']}>
          <ButtonAdd>Add Category</ButtonAdd>
        </div>
        <SearchBar placeholder="Search" className={styles['category-search']} />
      </SubNav>
      <div className={styles['content-container']}>
        <SideNav>
          <SideNavSection>
            <SideNavMainLink to={`/categories/womens/${type}`}>Womens</SideNavMainLink>
            <SideNavMainLink to={`/categories/mens/${type}`}>Mens</SideNavMainLink>
          </SideNavSection>
          <SideNavSection>
            <SideNavMainLink to={`/categories/${gender}/categories`}>Categories</SideNavMainLink>
            <SideNavMainLink to={`/categories/${gender}/subcategories`}>Subcategories</SideNavMainLink>
          </SideNavSection>
        </SideNav>
        <MainContent>
          <Card>
           <div className={styles['category-title-container']}>
              <h2>Tops</h2>
            </div>
            <div className={styles['details-container']}>
              <p>id: 1</p>
              <p>Subcategories: 7</p>
              <p>Products: 200</p>
            </div>
          </Card>
          <Card>
           <div className={styles['category-title-container']}>
              <h2>Tops</h2>
            </div>
            <div className={styles['details-container']}>
              <p>id: 1</p>
              <p>Subcategories: 7</p>
              <p>Products: 200</p>
            </div>
          </Card>
          <Card>
           <div className={styles['category-title-container']}>
              <h2>Tops</h2>
            </div>
            <div className={styles['details-container']}>
              <p>id: 1</p>
              <p>Subcategories: 7</p>
              <p>Products: 200</p>
            </div>
          </Card>
          <Card>
           <div className={styles['category-title-container']}>
              <h2>Tops</h2>
            </div>
            <div className={styles['details-container']}>
              <p>id: 1</p>
              <p>Subcategories: 7</p>
              <p>Products: 200</p>
            </div>
          </Card>
          <Card>
           <div className={styles['category-title-container']}>
              <h2>Tops</h2>
            </div>
            <div className={styles['details-container']}>
              <p>id: 1</p>
              <p>Subcategories: 7</p>
              <p>Products: 200</p>
            </div>
          </Card>
          <Card>
            <div className={styles['category-title-container']}>
              <h2>Tops</h2>
            </div>
            <div className={styles['details-container']}>
              <p>id: 1</p>
              <p>Subcategories: 7</p>
              <p>Products: 200</p>
            </div>
          </Card>
        </MainContent>
      </div>
    </Page>
  )
}

export default Categories;