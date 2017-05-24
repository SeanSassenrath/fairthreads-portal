import { ajax } from 'rxjs/observable/dom/ajax';
import { mergeMap, debounceTime } from 'rxjs';
import { omit } from 'lodash';
import { showNotification } from './notification-actions';

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
  FETCH_BRANDS_BY_PRODUCTS,
  FETCH_BRANDS_BY_PRODUCTS_FULFILLED,
  PRODUCT_CATEGORY_FILTER
} from '../constants/product-constants';

// FILTER PRODUCTS BY CATEGORY
export const filterProductsByCategory = (gender, category, brand, page) => ({ 
  type: PRODUCT_CATEGORY_FILTER, 
  gender, 
  category,
  brand,
  page
});

export const filterProductsByCategoryEpic = action$ => 
  action$.ofType(PRODUCT_CATEGORY_FILTER)
    .mergeMap(action => 
      ajax.getJSON(`http://localhost:9000/api/v1/products?gender=${action.gender}&category=${action.category === 'all' ? '' : action.category}&page=${action.page}&search=${action.search || ''}&brand=${action.brand ? action.brand : ''}`)
        .map(response => fetchProductsFulfilled({ response, gender: action.gender, category: action.category }))
    );


// FETCH PRODUCTS
export const fetchProducts = (gender, category, brand, page) => ({ 
  type: FETCH_PRODUCTS, 
  gender, 
  category,
  brand,
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
      ajax.getJSON(`http://localhost:9000/api/v1/products?gender=${action.gender}&category=${action.category === 'all' ? '' : action.category}&page=${action.page}&search=${action.search || ''}&brand=${action.brand ? action.brand : ''}`)
        .map(response => fetchProductsFulfilled({ response, gender: action.gender, category: action.category }))
    );

// FETCH PRODUCT
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

// UPDATE PRODUCT
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

// SAVE UPDATED PRODUCT
export const saveUpdatedProduct = ({product, id, category, gender}) => ({
  type: SAVE_UPDATED_PRODUCT,
  product: product,
  id: id,
  category: category,
  gender: gender
})

export const saveUpdatedProductEpic = action$ =>
  action$.ofType(SAVE_UPDATED_PRODUCT)
    .debounceTime(500)
    .mergeMap(({id, product}) =>
      ajax
        .put(`http://localhost:9000/api/v1/products/${id}`,
          JSON.stringify(Object.assign(
            {}, 
            { categories: product.categories._id }, 
            { css: product.css},
            { details: product.details },
            { metadata: product.metadata }
          )), 
        {'Content-Type': 'application/json'})
        .map(({ status, response }) => showNotification(status, response))
    );

// FETCH BRANDS BY PRODUCT CATEGORY
export const fetchBrandsByProducts = (category, gender) => ({
  type: FETCH_BRANDS_BY_PRODUCTS,
  category,
  gender
})
  
export const fetchBrandsByProductsFulfilled = ({response}) => ({
  type: FETCH_BRANDS_BY_PRODUCTS_FULFILLED,
  response
})

export const fetchBrandsByProductsEpic = action$ => 
  action$.ofType(FETCH_BRANDS_BY_PRODUCTS)
    .mergeMap(({ category, gender }) =>
      ajax.getJSON(`http://localhost:9000/api/v1/products/brand-list?category=${category}&gender=${gender}`)
        .map(response => fetchBrandsByProductsFulfilled({ response }))
    );