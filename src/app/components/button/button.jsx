import React from 'react';
import styles from './button.css';
import classNames from 'classnames';

const Button = props => {
  const buttonClass = classNames(props.className, styles['button']);
  return (
    <button {...props} className={buttonClass}>
      {props.children}
    </button>
  )
}

export default Button;

export const ButtonAdd = props => {
  const buttonClass = classNames(props.className, styles['button-add']);
  return (
    <button {...props} className={buttonClass}>
      <span>{props.children}</span>
    </button>
  )
}