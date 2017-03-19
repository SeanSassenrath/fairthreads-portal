import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import Page from '../../components/page/page';
import SubNav from '../../components/sub-nav/sub-nav';
import SideNavSection from '../../components/side-nav-section/side-nav-section';
import SideNavMainLink from '../../components/side-nav-main-link/side-nav-main-link';
import SideNavSubLink from '../../components/side-nav-sub-link/side-nav-sub-link';
import styles from './categories';

const Categories = props => {
  console.log('props', props);
  const gender = props.match.params.gender;
  const type = props.match.params.type;

  return (
    <Page>
      <SubNav gender={gender} type={type} />
      <div className={styles['content-container']}>
        <div>
          <SideNavSection>
            <SideNavMainLink to={`/categories/womens/${type}`}>Womens</SideNavMainLink>
            <SideNavMainLink to={`/categories/mens/${type}`}>Mens</SideNavMainLink>
          </SideNavSection>
          <SideNavSection>
            <SideNavMainLink to={`/categories/${gender}/categories`}>Categories</SideNavMainLink>
            <SideNavMainLink to={`/categories/${gender}/subcategories`}>Subcategories</SideNavMainLink>
          </SideNavSection>
        </div>
      </div>
    </Page>
  )
}

export default Categories;