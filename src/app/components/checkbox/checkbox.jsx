import React, { Component, PropTypes } from 'react';
import styles from './checkbox.css';
import autobind from 'react-autobind';

class Checkbox extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    autobind(this);
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.onChange(e);
    }
  }

  render() {
    const { checked, onChange } = this.props;

    return (
      <div className={styles['checkbox']} tabIndex={0} onKeyDown={this.onKeyDown}>
        <input 
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <label onClick={onChange}>
          {this.props.children}
        </label>
      </div>
    )
  }
}

export default Checkbox;