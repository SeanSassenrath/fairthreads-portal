import React, { Component, PropTypes} from 'react';
import autobind from 'react-autobind';
import Page from '../../components/page/page';
import MainContent from '../../components/main-content/main-content';
import { BrandsContainer } from '../../containers/brands-container/brands-container';
import styles from './brands.css';

export const Brands = (props) => {
  const { category, gender } = props.match.params;

  return (
    <Page>
      <MainContent>
        <BrandsContainer />
      </MainContent>
    </Page>
  )
}