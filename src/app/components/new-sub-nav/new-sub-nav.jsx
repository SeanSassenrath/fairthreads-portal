import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import style from './new-sub-nav.css';

export class NewSubNav extends Component {

  render() {
    return (
      <div className={style['sub-nav-container']}>
        <DropDownMenu value={1} onChange={() => {}}>
          <MenuItem value={1} primaryText="Designer" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
        <DropDownMenu value={1} onChange={() => {}}>
          <MenuItem value={1} primaryText="Size" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
        <DropDownMenu value={1} onChange={() => {}}>
          <MenuItem value={1} primaryText="Color" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
      </div>
    )
  }
}