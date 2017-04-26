import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import autoBind from 'react-autobind';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import { getProductById } from '../../reducers/root-reducer';
import { saveUpdatedProduct } from '../../actions/product-actions';
import { hideNotification } from '../../actions/notification-actions';
import SubNav from '../../components/sub-nav/sub-nav';
import Button from '../../components/button/button';
import styles from './edit-product-sub-nav-container.css';

class EditProductSubNavContainer extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { product } = this.props;
    const updatedAt = new Date(product.updatedAt);
    const createdAt = new Date(product.createdAt);
    return (
      <SubNav>
        <div className={styles['left-sub-nav-container']}>
          <FlatButton
            label="Back"
            primary={true}
            icon={<KeyboardArrowLeft />}
            onClick={this.goBack}
          />
          <div className={styles['meta-info-container']}>
            <span>id: {product._id}</span>
            <span>Updated At: {updatedAt.toDateString()}</span>
            <span>Created At: {createdAt.toDateString()}</span>
          </div>
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
  connect(mapStateToProps, {
    saveUpdatedProduct,
    hideNotification
  })(EditProductSubNavContainer));

