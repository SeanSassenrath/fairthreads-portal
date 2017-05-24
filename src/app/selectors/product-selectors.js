import { createSelector } from 'reselect';

const getGender = state => state.gender;
const getProducts = state => state.products;
const getCategory = state => state.category;
const getBrand = state => state.brand;

const getProductsByGender = state => createSelector(
  getGender,
  (products, gender) => products.filter(product => product.details.gender === gender)
)

const getProductsByCategory = state => createSelector(
  getProductsByGender,
  getCategory,
  (products, category) => products.filter(product => product.categories.details.name === category)
)

export const getProductsByBrand = state => createSelector(
  getProductsByCategory,
  getBrand,
  (products, brand) => products.filter(product => product.brand.metadata.id === brand)
)