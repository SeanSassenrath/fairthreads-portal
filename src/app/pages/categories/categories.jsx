import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import { ButtonAdd } from '../../components/button/button';
import Page from '../../components/page/page';

const Categories = props => (
  <Page>
    Categories
    <ButtonAdd>Test</ButtonAdd>
  </Page>
)

export default Categories;