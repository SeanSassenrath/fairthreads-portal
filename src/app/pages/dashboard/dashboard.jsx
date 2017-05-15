import React, { Component, PropTypes} from 'react';
import Page from '../../components/page/page';
import PullProducts from '../../containers/pull-products-container/pull-products-container';

export class Dashboard extends Component {
  render() {
    return (
      <Page>
        <PullProducts>
          Pull Products
        </PullProducts>
      </Page>
    )
  }
}