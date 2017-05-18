import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getNotification } from '../../reducers/root-reducer';
import { Notification } from '../../components/notification/notification';

const mapStateToProps = (state) => {
  return {
   notification: getNotification(state)
  }
}

export const NotificationContainer = connect(
  mapStateToProps, {}
)(Notification);