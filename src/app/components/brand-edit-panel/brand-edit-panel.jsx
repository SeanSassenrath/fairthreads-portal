import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Button from '../button/button';
import styles from './brand-edit-panel.css';

export const BrandEditPanel = ({ name, image, description, updateBrandField, onSaveUpdatedBrand }) => (
  <div className={styles['brand-edit-panel']}>
    <div className={styles['brand-text-field-container']}>
      <TextField
        id="brand-name"
        disabled={!name}
        floatingLabelText="Brand name"
        value={name || "Brand Name"}
        onChange={e => this.updateBrandField('name', e)}
      />
    </div>
    <div className={styles['brand-text-field-container']}>
      <TextField
        id="brand-image"
        disabled={!name}
        floatingLabelText="Brand image"
        value={image || ""}
        onChange={e => this.updateBrandField('image', e)}
      />
    </div>
    <div>
      <textarea 
        disabled={!name}
        className={styles['brand-description']}
        value={description || "Brand description"}
        onChange={e => updateBrandField('description', e)}
      />
    </div>
    <Button onClick={onSaveUpdatedBrand}>
      Save
    </Button>
    <a href="#">
      Cancel
    </a>
  </div>
)