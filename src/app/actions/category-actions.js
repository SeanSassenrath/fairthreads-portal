import { ajax } from 'rxjs/observable/dom/ajax';
import { mergeMap } from 'rxjs';

import { 
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FULFILLED
} from '../constants/category-constants';

// http://localhost:9000/api/v1/categories/?gender=womens
export const fetchCategories = gender => ({ 
  type: FETCH_CATEGORIES, 
  gender: gender, 
});

export const fetchCategoriesFulfilled = (payload, gender) => ({ type: FETCH_CATEGORIES_FULFILLED, payload, gender });

export const fetchCategoriesEpic = action$ =>
  action$.ofType(FETCH_CATEGORIES)
    .mergeMap(action =>
      ajax.getJSON(`http://localhost:9000/api/v1/categories?gender=${action.gender}`)
        .map(response => fetchCategoriesFulfilled(response, action.gender))
    );