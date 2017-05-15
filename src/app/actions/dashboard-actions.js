import { ajax } from 'rxjs/observable/dom/ajax';
import { mergeMap } from 'rxjs';

import { 
  PULL_PRODUCTS,
  PULL_PRODUCTS_FULFILLED
} from '../constants/dashboard-constants';

// http://localhost:9000/api/v1/categories/?gender=womens
export const pullProducts = () => ({ 
  type: PULL_PRODUCTS
});

export const pullProductsFulfilled = (status, { message }) => ({ type: PULL_PRODUCTS_FULFILLED, status, message });

export const pullProductsEpic = action$ =>
  action$.ofType(PULL_PRODUCTS)
    .mergeMap(action =>
      ajax.get(`http://localhost:9000/api/v1/dashboard/pull-products`)
        .map(({ status, response }) => pullProductsFulfilled(status, response))
    );
