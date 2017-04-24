import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED
} from '../constants/product-constants';
import { FETCH_CATEGORIES_FULFILLED } from '../constants/category-constants';


const createList = (category, gender) => {
  return (state = [], action) => {
    if (action.category !== category || action.gender !== gender) {
      return state;
    }
    switch (action.type) {
      case FETCH_PRODUCTS_FULFILLED:
        return state.concat(action.response.map(product => product._id));
      default:
        return state;
    }
  }
}

export const createMensList = (category) => {
  return createList(category, 'mens');
}

export const createWomensList = (category) => {
  return createList(category, 'womens');
}

export default createList;

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