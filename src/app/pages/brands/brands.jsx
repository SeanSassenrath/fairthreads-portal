import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import Page from '../../components/page/page';
import SideNav from '../../components/side-nav/side-nav';
import SideNavSection from '../../components/side-nav-section/side-nav-section';
import SideNavMainLink from '../../components/side-nav-main-link/side-nav-main-link';
import Button from '../../components/button/button';
import MainContent from '../../components/main-content/main-content';
import CategoryNavContainer from '../../containers/category-nav-container/category-nav-container';
import BrandsContainer from '../../containers/brands-container/brands-container';
import styles from './brands.css';

const Brands = props => {
  console.log('props', props);
  const gender = props.match.params.gender;
  const category = props.match.params.category;

  return (
    <Page>
      <MainContent>
        <BrandsContainer />
      </MainContent>
    </Page>
  )
}

export default Brands;