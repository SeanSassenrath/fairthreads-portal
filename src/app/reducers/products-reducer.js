import { combineReducers } from 'redux';
import { set, merge, push } from 'immutable-light';
import createList, * as fromList from './create-list';
import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED
} from '../constants/product-constants';

const productsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return state;
    case FETCH_PRODUCTS_FULFILLED:
      const nextState = { ...state };
      action.response.forEach(product => {
        nextState[product._id] = product;
      });
      return nextState;
    default:
      return state;
  }
};

const womensCategories = combineReducers({
  tops: fromList.createWomensList('tops'),
  bottoms: fromList.createWomensList('bottoms'),
  outerwear: fromList.createWomensList('outerwear'),
  accessories: fromList.createWomensList('accessories'),
  shoes: fromList.createWomensList('shoes'),
  dresses: fromList.createWomensList('dresses'),

})

const mensCategories = combineReducers({
  tops: fromList.createMensList('tops'),
  bottoms: fromList.createMensList('bottoms'),
  outerwear: fromList.createMensList('outerwear'),
  accessories: fromList.createMensList('accessories'),
  shoes: fromList.createMensList('shoes')
})

export const getProductsByGenderAndType = (state, gender, type, filter) => {
  const capitalizeType = type.charAt(0).toUpperCase() + type.slice(1)
  const genderAndType = gender + capitalizeType;
  const ids = fromList.getIds(state[genderAndType][filter]);
  return ids.map(id => state.productsById[id]);
}

const products = combineReducers({
  productsById,
  womensCategories,
  mensCategories
})

export default products;