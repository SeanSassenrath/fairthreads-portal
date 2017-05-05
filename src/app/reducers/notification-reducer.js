import { setIn } from 'immutable-light';
import { SAVE_UPDATED_PRODUCT_FULFILLED } from '../constants/product-constants';
import { SAVE_UPDATED_BRAND_FULFILLED } from '../constants/brand-constants';
import { HIDE_NOTIFICATION } from '../constants/notification-constants';

const notification = (state = { display: false }, action) => {
  switch (action.type) {
    case HIDE_NOTIFICATION:
      return setIn(state, ['display'], false);
    case SAVE_UPDATED_PRODUCT_FULFILLED:
      return Object.assign({}, {
        message: action.response.response.message,
        error: action.response.status !== 200,
        display: true
      });
    case SAVE_UPDATED_BRAND_FULFILLED:
      return Object.assign({}, {
        message: action.response.response.message,
        error: action.response.status !== 200,
        display: true
      });
    default:
      return state;
  }
}

export default notification;