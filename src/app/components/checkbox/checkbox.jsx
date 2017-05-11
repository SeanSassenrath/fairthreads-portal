import React, { Component, PropTypes } from 'react';
import styles from './checkbox.css';

class Checkbox extends Component {
  propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
  }

  render() {
    const { checked, onChange } = this.props;

    return (
      <div className={styles['checkbox']}>
        <input 
          type="checkbox"
          onChange={onChange}
          checked={checked}
          ref={(checkbox) => this._checkbox = checkbox}
        />
        <label onClick={onChange}>
          {this.props.children}
        </label>
      </div>
    )
  }
}

export default Checkbox;