import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import autoBind from 'react-autobind';
import { getProductById } from '../../reducers/root-reducer';
import { saveUpdatedProduct } from '../../actions/product-actions';
import SubNav from '../../components/sub-nav/sub-nav';
import Button from '../../components/button/button';
import styles from './edit-product-sub-nav.css';

class EditProductSubNav extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  saveProductUpdate() {
    const {product, saveUpdatedProduct} = this.props;
    saveUpdatedProduct({id: product._id, product})
  }

  render() {
    console.log('this.props', this.props);

    return (
      <SubNav>
        <div className={styles['left-sub-nav-container']}>
          <Button onClick={this.goBack}>
            Back
          </Button>
          <div>
            <Button onClick={this.saveProductUpdate}>Save changes</Button>
          </div>
          <div>
            <Button>Cancel changes</Button>
          </div>
        </div>
        <div>
          <Button>Delete product</Button>
        </div>
      </SubNav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: getProductById(state)
  }
}

export default withRouter(
  connect(mapStateToProps,{
    saveUpdatedProduct
  })(EditProductSubNav));

