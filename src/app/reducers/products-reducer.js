import { combineReducers } from 'redux';
import { setIn, merge } from 'immutable-light';
import * as fromList from './create-list';
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
  SAVE_UPDATED_PRODUCT,
  FETCH_BRANDS_BY_PRODUCTS,
  FETCH_BRANDS_BY_PRODUCTS_FULFILLED,
  PRODUCT_CATEGORY_FILTER
} from '../constants/product-constants';

const brands = (state = [], action) => {
  switch (action.type) {
    case FETCH_BRANDS_BY_PRODUCTS:
      return state;
    case FETCH_BRANDS_BY_PRODUCTS_FULFILLED:
      const newState = action.response.brands;
      return newState;
    default:
      return state;
  }
}

const productsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
    case FETCH_PRODUCT:
      return state;
    case FETCH_PRODUCTS_FULFILLED:
      const nextState = { ...state };
      action.response.forEach(product => {
        nextState[product._id] = product;
      });
      return nextState;
    case FETCH_PRODUCT_FULFILLED:
      return merge(state, {[action.response._id]: action.response});
    case UPDATE_PRODUCT_ACTIVE:
      return setIn(state, [action.productId, 'metadata', 'active'], !!state[action.productId].metadata.active);
    case UPDATE_PRODUCT_NAME:
      return setIn(state, [action.productId, 'details', 'name'], action.name);
    case UPDATE_PRODUCT_GENDER:
      return setIn(state, [action.productId, 'details', 'gender'], action.gender);
    case UPDATE_PRODUCT_IMG_FIT:
      return setIn(state, [action.productId, 'css', 'objectFit'], action.fit);
    case UPDATE_PRODUCT_CATEGORY:
      return setIn(state, [action.productId, 'categories'], action.category);
    default:
      return state;
  }
};

const loading = (state = {'isLoading': false}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return Object.assign({}, {'isLoading': true});
    case FETCH_PRODUCT_FULFILLED:
      return Object.assign({}, {'isLoading': false});
    case FETCH_PRODUCTS:
      return Object.assign({}, {'isLoading': true});
    case FETCH_PRODUCTS_FULFILLED:
      return Object.assign({}, {'isLoading': false});
    default:
      return state;
  }
}

const productList = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_FULFILLED:
      return state.concat(action.response.map(product => product._id));
    default:
      return state;
  }
}

const productFilters = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return Object.assign({}, {
        gender: action.gender,
        category: action.category,
        brand: action.brand
      });
    default:
      return state;
    }
  }

const womensCategories = combineReducers({
  all: fromList.createWomensList('all'),
  uncategorized: fromList.createWomensList('uncategorized'),
  tops: fromList.createWomensList('tops'),
  bottoms: fromList.createWomensList('bottoms'),
  outerwear: fromList.createWomensList('outerwear'),
  accessories: fromList.createWomensList('accessories'),
  shoes: fromList.createWomensList('shoes'),
  dresses: fromList.createWomensList('dresses'),
})

const mensCategories = combineReducers({
  all: fromList.createMensList('all'),
  uncategorized: fromList.createMensList('uncategorized'),
  tops: fromList.createMensList('tops'),
  bottoms: fromList.createMensList('bottoms'),
  outerwear: fromList.createMensList('outerwear'),
  accessories: fromList.createMensList('accessories'),
  shoes: fromList.createMensList('shoes')
})

// type = categories, filter = tops
// export const getProductsByGenderAndType = (state, gender, type, filter) => {
//   const capitalizeType = type.charAt(0).toUpperCase() + type.slice(1)
//   const genderAndType = gender + capitalizeType;
//   const ids = fromList.getIds(state[genderAndType][filter]);
//   return ids.map(id => state.productsById[id]);
// }

const products = combineReducers({
  loading,
  productsById,
  productList,
  brands,
  productFilters
})

export default products;