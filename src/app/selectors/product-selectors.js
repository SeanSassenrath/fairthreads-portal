import { createSelector } from 'reselect';

const getProducts = state => state.products.productList;
const getProductsById = state => state.products.productsById;
const getGender = state => state.products.productFilters.gender;
const getCategory = state => state.products.productFilters.category;
const getBrand = state => state.products.productFilters.brand;

const getProductsByGender = createSelector(
  [getProducts, getProductsById, getGender],
  (products, productsById, gender) => products.filter(product => productsById[product].details.gender === gender)
)

const getProductsByCategory = createSelector(
  [getProductsByGender, getProductsById, getCategory],
  (products, productsById, category) => {
    // Don't filter if category is 'all'
    if (category && category !== 'all') {
      return products.filter(product => {
        if (productsById[product].categories !== null && productsById[product].categories.details ) {
          return productsById[product].categories.details.name === category
        }
      })
    }
    return products;
  }
)

const getProductsByBrand = createSelector(
  [getProductsByCategory, getProductsById, getBrand],
  (products, productsById, brand) => {
    if (brand) {
      return products.filter(product => productsById[product].brand.metadata.id === brand)
    }
    return products
  }
)

export const getFilteredProducts = createSelector(
  [getProductsByBrand, getProductsById],
  (products, productsById) => products.map(product => productsById[product])
)