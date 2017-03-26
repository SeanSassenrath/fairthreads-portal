import { combineReducers } from 'redux';
import { set, merge } from 'immutable-light';
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
      action.payload.forEach(product => {
        nextState[product._id] = product;
      });
      console.log('nextState', nextState)
      return nextState;
    default:
      return state;
  }
};

const allProducts = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return state;
    case FETCH_PRODUCTS_FULFILLED:
      return set(state, 'items', action.payload);
    default:
      return state;
  }
}

const products = combineReducers({
  productsArray: allProducts,
  productsById
})

export default products;

export const getProducts = (state) => {
  return state;
}

// const products = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_PRODUCTS:
//       // console.log('Fetching products...')
//       return state;
//     case FETCH_PRODUCTS_FULFILLED:
//       // console.log('Products received', action.payload);
//       return set(state, 'items', action.payload);
//     default:
//       return state;
//   }
// }


// const listByFilter = combineReducers({
//   all: createList('all'),
//   active: createList('active'),
//   completed: createList('completed'),
// });

// const listByGender = combineReducers({

// })

// const listByCategory = combineReducers({

// })

// export const getProductsByGenderAndCategory = (state, filter) => {
//   const ids = fromList.getIds(state.listByFilter[filter]);
//   return ids.map(id => fromById.getTodo(state.byId, id));
// };