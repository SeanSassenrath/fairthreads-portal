import { ajax } from 'rxjs/observable/dom/ajax';
import { mergeMap } from 'rxjs';

// const fetchProducts = username => ({ type: FETCH_PRODUCTS });
// const fetchProductsFulfilled = payload => ({ type: FETCH_PRODUCTS_FULFILLED, payload });
import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED
} from '../constants/product-constants';

// http://localhost:9000/api/v1/products/?gender=womens
export const fetchProducts = payload => ({ 
  type: FETCH_PRODUCTS, 
  gender: payload.gender, 
  category: payload.category 
});
export const fetchProductsFulfilled = payload => ({ type: FETCH_PRODUCTS_FULFILLED, payload });

// action creators
// const fetchUser = username => ({ type: FETCH_USER, payload: username });
// const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

// epic
export const fetchProductsEpic = action$ =>
  action$.ofType(FETCH_PRODUCTS)
    .mergeMap(action =>
      ajax.getJSON(`http://localhost:9000/api/v1/products?gender=${action.gender}&category=${action.category}`)
        .map(response => fetchProductsFulfilled(response))
    );

// later...
// dispatch(fetchUser('torvalds'));