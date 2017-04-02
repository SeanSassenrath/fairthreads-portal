import { combineReducers } from 'redux';
import { setIn, merge, push } from 'immutable-light';
import createList, * as fromList from './create-list';
import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCT,
  FETCH_PRODUCT_FULFILLED,
  UPDATE_PRODUCT_ACTIVE,
  UPDATE_PRODUCT_GENDER,
  UPDATE_PRODUCT_IMG_FIT,
  SAVE_UPDATED_PRODUCT,
  SAVE_UPDATED_PRODUCT_FULFILLED
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

const product = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return state;
    case FETCH_PRODUCT_FULFILLED:
      return Object.assign({}, action.response);
    case UPDATE_PRODUCT_ACTIVE:
      return setIn(state, ['metadata', 'active'], !state.metadata.active)
    case UPDATE_PRODUCT_GENDER:
      return setIn(state, ['details', 'gender'], action.gender)
    case UPDATE_PRODUCT_IMG_FIT:
      return setIn(state, ['css', 'objectFit'], action.fit);
    case SAVE_UPDATED_PRODUCT:
      return state;
    case SAVE_UPDATED_PRODUCT_FULFILLED:
      return state;
    default:
      return state;
  }
}

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

// export const getProductById = (state) => {
//   console.log('stateee', state)
//   return state;
// }

const products = combineReducers({
  product,
  productsById,
  womensCategories,
  mensCategories
})

export default products;