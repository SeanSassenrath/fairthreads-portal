// import { ajax } from 'rxjs/observable/dom/ajax';

// const fetchProducts = username => ({ type: FETCH_PRODUCTS });
// const fetchProductsFulfilled = payload => ({ type: FETCH_PRODUCTS_FULFILLED, payload });
import { FETCH_PRODUCTS } from '../constants/product-constants';

export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS
  }
}