import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import products, * as ProductSelectors from './products-reducer';
import categories, * as CategorySelectors from './categories-reducer';
import brands, * as BrandSelectors from './brands-reducer';
import notification from './notification-reducer';
import { 
  fetchProductsEpic, 
  fetchProductEpic, 
  saveUpdatedProductEpic,
  fetchBrandsByProductsEpic,
  filterProductsByCategoryEpic
} from '../actions/product-actions';
import { fetchCategoriesEpic } from '../actions/category-actions';
import { fetchBrandsEpic, saveUpdatedBrandEpic } from '../actions/brand-actions';
import { pullProductsEpic } from '../actions/dashboard-actions';
import { notificationEpic } from '../actions/notification-actions';

export const rootEpic = combineEpics(
  fetchBrandsEpic,
  saveUpdatedBrandEpic,
  fetchCategoriesEpic,
  fetchProductsEpic,
  fetchProductEpic,
  saveUpdatedProductEpic,
  pullProductsEpic,
  notificationEpic,
  fetchBrandsByProductsEpic,
  filterProductsByCategoryEpic
);

export const rootReducer = combineReducers({
  brands,
  categories,
  products,
  notification,
});

// export const getProductsByGenderAndType = (state, gender, type, filter) => (
//   ProductSelectors.getProductsByGenderAndType(state.products, gender, type, filter)
// )
export const getProductById = (state, id) => {
  console.log('getProductById', state.products.productsById[id])
  return state.products.productsById[id]
}
export const getBrandsByProducts = (state) => (
  state.products.brands
)

export const getAllBrands = (state) => (
  BrandSelectors.getAllBrands(state.brands)
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