import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import products, * as ProductSelectors from './products-reducer';
import categories, * as CategorySelectors from './categories-reducer';
import notification from './notification-reducer';
import { fetchProductsEpic, fetchProductEpic, saveUpdatedProductEpic } from '../actions/product-actions';
import { fetchCategoriesEpic } from '../actions/category-actions';

export const rootEpic = combineEpics(
  fetchProductsEpic,
  fetchProductEpic,
  fetchCategoriesEpic,
  saveUpdatedProductEpic,
);

export const rootReducer = combineReducers({
  categories,
  products,
  notification,
});

export const getProductsByGenderAndType = (state, gender, type, filter) => (
  ProductSelectors.getProductsByGenderAndType(state.products, gender, type, filter)
)
export const getProductById = (state) => (
  state.products.product
)

export const getCategoriesByGender = (state, gender) => (
  CategorySelectors.getCategoriesByGender(state.categories, gender)
)
export const getCategoriesById = (state) => (
  state.categories.categoriesById
)

export const getNotification = (state) => (
  state.notification
)

export const getIsLoading = (state) => (
  state.products.loading.isLoading
)