import { FETCH_PRODUCTS, FETCH_PRODUCTS_FULFILLED, SAVE_UPDATED_PRODUCT } from '../constants/product-constants';
import { FETCH_CATEGORIES_FULFILLED } from '../constants/category-constants';
import { FETCH_BRANDS_FULFILLED } from '../constants/brand-constants';
import omit from 'lodash/omit';

const createList = (category, gender) => {
  return (state = [], action) => {
    if (action.category !== category || action.gender !== gender) {
      return state;
    }
    switch (action.type) {
      case FETCH_PRODUCTS_FULFILLED:
        return state.concat(action.response.map(product => product._id));
      case SAVE_UPDATED_PRODUCT:
        for(let i = 0; i < state.length; i++) {
          if (state[i] === action.id) {
            return state
              .slice(0, i)
              .concat(state.slice(i + 1));
          }
        }
      default:
        return state;
    }
  }
}

export const createMensList = category => {
  return createList(category, 'mens');
}

export const createWomensList = category => {
  return createList(category, 'womens');
}

export const getIds = (state) => state;
export const getId = (state, id) => state[id];

export const createCategoryList = gender => {
  return (state = [], action) => {
    if (action.gender !== gender) {
      return state;
    }
    switch (action.type) {
      case FETCH_CATEGORIES_FULFILLED:
        return action.payload.map(cateogry => cateogry._id);
      default:
        return state;
    }
  }
}

export const createBrandList = () => {
  return (state = [], action) => {
    switch (action.type) {
      case FETCH_BRANDS_FULFILLED:
        return action.payload.map(brand => brand._id);
      default:
        return state;
    }
  }
}