import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import products, * as ProductSelectors from './products-reducer';
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

export const getProductsByGenderAndType = (state, gender, type, filter) => (
  ProductSelectors.getProductsByGenderAndType(state.products, gender, type, filter)
)
