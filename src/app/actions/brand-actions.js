import { ajax } from 'rxjs/observable/dom/ajax';
import { mergeMap } from 'rxjs';

import { 
  FETCH_BRANDS,
  FETCH_BRANDS_FULFILLED
} from '../constants/brand-constants';

export const fetchBrands = ()=> ({ 
  type: FETCH_BRANDS, 
});

export const fetchBrandsFulfilled = payload => ({ type: FETCH_BRANDS_FULFILLED, payload });

export const fetchBrandsEpic = action$ =>
  action$.ofType(FETCH_BRANDS)
    .mergeMap(action =>
      ajax.getJSON(`http://localhost:9000/api/v1/brands`)
        .map(response => fetchBrandsFulfilled(response))
    );