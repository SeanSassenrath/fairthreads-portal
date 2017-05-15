import { setIn } from 'immutable-light';
import { SAVE_UPDATED_PRODUCT_FULFILLED } from '../constants/product-constants';
import { SAVE_UPDATED_BRAND_FULFILLED } from '../constants/brand-constants';
import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from '../constants/notification-constants';
import { PULL_PRODUCTS_FULFILLED } from '../constants/dashboard-constants';

const notification = (state = { display: false }, action) => {
  switch (action.type) {
    case HIDE_NOTIFICATION:
      return setIn(state, ['display'], false);
    case SHOW_NOTIFICATION:
    console.log('action.status', action.status)
      return Object.assign({}, {
        message: action.message,
        error: action.status !== 200,
        display: true
      });
    default:
      return state;
  }
}

export default notification;