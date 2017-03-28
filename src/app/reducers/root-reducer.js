import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import products, * as ProductSelectors from './products-reducer';
import categories from './categories-reducer';
import { fetchProductsEpic, fetchProductEpic } from '../actions/product-actions';
import { fetchCategoriesEpic } from '../actions/category-actions';

export const rootEpic = combineEpics(
  fetchProductsEpic,
  fetchProductEpic,
  fetchCategoriesEpic
);

export const rootReducer = combineReducers({
  products,
  categories
});

export const getProductsByGenderAndType = (state, gender, type, filter) => (
  ProductSelectors.getProductsByGenderAndType(state.products, gender, type, filter)
)
export const getProductById = (state) => (
  state.products.product
)