import { ajax } from 'rxjs/observable/dom/ajax';
import { mergeMap } from 'rxjs';

import { 
  FETCH_BRANDS,
  FETCH_BRANDS_FULFILLED,
  SAVE_UPDATED_BRAND,
  SAVE_UPDATED_BRAND_FULFILLED,

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

// Save updated brand

export const saveUpdatedBrand = ({brand, id}) => ({
  type: SAVE_UPDATED_BRAND,
  brand,
  id
})

export const saveUpdatedBrandEpic = action$ =>
  action$.ofType(SAVE_UPDATED_BRAND)
    .mergeMap(action =>
      ajax
        .put(`http://localhost:9000/api/v1/brands/${action.id}`,
          JSON.stringify(Object.assign(
            {}, 
            {'details': action.brand.details},
            {'metadata': action.brand.metadata})), 
        {'Content-Type': 'application/json'})
        .map(response => saveUpdatedBrandFulfilled({response}))
  );

export const saveUpdatedBrandFulfilled = ({response}) => ({
  type: SAVE_UPDATED_BRAND_FULFILLED,
  response
})