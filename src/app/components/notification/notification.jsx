import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './notification.css';

const propTypes = {
  notification: PropTypes.object
}

export const Notification = ({ notification }) => {

  const { display, error, message } = notification;
  const notificationStateStyles = !error ? styles['success'] : styles['error'];
  const className = display ? notificationStateStyles : styles['hidden'];

  return (
    <div className={className}>
      <span>{ message }</span>
    </div>
  )
}