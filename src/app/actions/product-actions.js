import { ajax } from 'rxjs/observable/dom/ajax';
import { mergeMap } from 'rxjs';
import { omit } from 'lodash';
import { hideNotification } from './notification-actions';

import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCT,
  FETCH_PRODUCT_FULFILLED,
  UPDATE_PRODUCT_ACTIVE,
  UPDATE_PRODUCT_NAME,
  UPDATE_PRODUCT_GENDER,
  UPDATE_PRODUCT_IMG_FIT,
  UPDATE_PRODUCT_CATEGORY,
  UPDATE_PRODUCT_BY_ID_ACTIVE,
  SAVE_UPDATED_PRODUCT,
  SAVE_UPDATED_PRODUCT_FULFILLED,
  SET_PRODUCT,
} from '../constants/product-constants';

// http://localhost:9000/api/v1/products/?gender=womens
export const fetchProducts = ({category, gender, page}) => ({ 
  type: FETCH_PRODUCTS, 
  category,
  gender, 
  page
});

export const fetchProductsFulfilled = ({response, gender, category}) => ({ 
  type: FETCH_PRODUCTS_FULFILLED, 
  response,
  gender,
  category
});

export const fetchProductsEpic = action$ =>
  action$.ofType(FETCH_PRODUCTS)
    .mergeMap(action => 
      ajax.getJSON(`http://localhost:9000/api/v1/products?gender=${action.gender}&category=${action.category === 'all' ? '' : action.category}&page=${action.page}&search=${action.search || ''}`)
        .map(response => fetchProductsFulfilled({ response, gender: action.gender, category: action.category }))
    );

export const fetchProduct = id => ({
  type: FETCH_PRODUCT,
  id
});

export const fetchProductFulfilled = ({response}) => ({
  type: FETCH_PRODUCT_FULFILLED,
  response
})

export const fetchProductEpic = action$ => 
  action$.ofType(FETCH_PRODUCT)
    .mergeMap(action =>
      ajax.getJSON(`http://localhost:9000/api/v1/products/${action.id}`)
        .map(response => fetchProductFulfilled({ response }))
    );

export const updateProductByIdActive = productId => ({
  type:  UPDATE_PRODUCT_BY_ID_ACTIVE,
  productId
})

export const updateProductActive = productId => ({
  type: UPDATE_PRODUCT_ACTIVE,
  productId
})

export const updateProductName = name => ({
  type: UPDATE_PRODUCT_NAME,
  name
})

export const updateProductGender = gender => ({
  type: UPDATE_PRODUCT_GENDER,
  gender
})

export const updateProductObjectFit = fit => ({
  type: UPDATE_PRODUCT_IMG_FIT,
  fit
})

export const updateProductCategory = category => ({
  type: UPDATE_PRODUCT_CATEGORY,
  category
})

export const saveUpdatedProduct = ({product, id, category, gender}) => ({
  type: SAVE_UPDATED_PRODUCT,
  product: product,
  id: id,
  category: category,
  gender: gender
})

export const saveUpdatedProductFulfilled = ({response}) => ({
  type: SAVE_UPDATED_PRODUCT_FULFILLED,
  response
})

export const saveUpdatedProductEpic = action$ =>
  action$.ofType(SAVE_UPDATED_PRODUCT)
    .mergeMap(action =>
      ajax
        .put(`http://localhost:9000/api/v1/products/${action.id}`,
          JSON.stringify(Object.assign(
            {}, 
            {'categories': action.product.categories._id}, 
            {'css': action.product.css},
            {'details': action.product.details},
            {'metadata': action.product.metadata})), 
        {'Content-Type': 'application/json'})
        .map(response => saveUpdatedProductFulfilled({response}))
    );