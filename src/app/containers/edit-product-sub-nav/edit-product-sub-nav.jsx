import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import SubNav from '../../components/sub-nav/sub-nav';
import Button from '../../components/button/button';
import styles from './edit-product-sub-nav.css';

class EditProductSubNav extends Component {

  render() {
    console.log('this.props', this.props);

    return (
      <SubNav>
        <div className={styles['left-sub-nav-container']}>
          <Button onClick={() => this.props.history.goBack()}>
            Back
          </Button>
          <div className={styles.refresh}>
            <Button>Delete product</Button>
          </div>
          <div className={styles.refresh}>
            <Button>Cancel changes</Button>
          </div>
        </div>
        <div className={styles.refresh}>
          <Button>Save changes</Button>
        </div>
      </SubNav>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default withRouter(
  connect(mapStateToProps,{

  })(EditProductSubNav));

