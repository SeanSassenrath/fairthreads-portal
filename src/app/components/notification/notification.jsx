import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './notification.css';

export default class Notification extends Component {

  render() {
    const { display, error, message } = this.props;
    const notificationStateStyles = !error ? styles['success'] : styles['error'];
    const className = display ? notificationStateStyles : styles['hidden'];

    return (
      <div className={className}>
        <span>{ message }</span>
      </div>
    )
  }
}