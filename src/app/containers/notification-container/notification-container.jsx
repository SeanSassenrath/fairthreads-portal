import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getNotification } from '../../reducers/root-reducer';
import Notification from '../../components/notification/notification';

const NotificationContainer = (props) => {
  return (
  <Notification 
    message={props.notification.message}
    error={props.notification.error}
    display={props.notification.display}
  />
  )
}

const mapStateToProps = (state) => {
  return {
    notification: getNotification(state),
  }
}

export default connect(
  mapStateToProps, {}
)(NotificationContainer);