import React from 'react';
import styles from './meta-count.css';
import classNames from 'classnames';
import { omit } from 'lodash';

const MetaCount = props => {
  const metaCountClass = classNames(props.className, styles['component-container']);
  const passthrough = omit(props, "gender", "count");
  return (
    <div {...passthrough} className={metaCountClass}>
      <span className={styles['count']}>{props.count}</span>
      <div className={styles['label-container']}>
        <span className={styles['gender']}>{props.gender}</span>
        <span className={styles['type']}>{props.type}</span>
      </div>
    </div>
  )
}

MetaCount.proptypes = {
  gender: React.PropTypes.string,
  count: React.PropTypes.number,
}

export default MetaCount;