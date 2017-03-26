import { set } from 'immutable-light';
import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED
} from '../constants/product-constants';

const initialState = {
  items: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      console.log('Fetching products...')
      return state;
    case FETCH_PRODUCTS_FULFILLED:
      console.log('Products received', action.payload);
      return set(state, 'items', action.payload);
    default:
      return state;
  }
}

export default products;