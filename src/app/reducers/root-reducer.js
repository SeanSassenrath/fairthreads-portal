import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import products from './products-reducer';
import categories from './categories-reducer';
import { fetchProductsEpic } from '../actions/product-actions';
import { fetchCategoriesEpic } from '../actions/category-actions';

export const rootEpic = combineEpics(
  fetchProductsEpic,
  fetchCategoriesEpic
);

export const rootReducer = combineReducers({
  products,
  categories
});