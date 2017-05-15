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

export const pullProductsFulfilled = (payload) => ({ type: PULL_PRODUCTS_FULFILLED, payload });

export const pullProductsEpic = action$ =>
  action$.ofType(PULL_PRODUCTS)
    .mergeMap(action =>
      ajax.getJSON(`http://localhost:9000/api/v1/dashboard/pull-products`)
        .map(response => pullProductsFulfilled(response))
    );
