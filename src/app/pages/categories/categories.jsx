import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import { ButtonAdd } from '../../components/button/button';
import MetaCount from '../../components/meta-count/meta-count';
import Page from '../../components/page/page';

const Categories = props => (
  <Page>
    Categories
    <ButtonAdd>Test</ButtonAdd>
    <MetaCount count={9} gender={'womens'} type={'categories'} />
  </Page>
)

export default Categories;