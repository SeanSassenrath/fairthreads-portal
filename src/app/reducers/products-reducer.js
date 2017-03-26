import { combineReducers } from 'redux';
import { set, merge, push } from 'immutable-light';
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
      console.log('nextStateObj', nextState)
      return nextState;
    default:
      return state;
  }
};

const allProductIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_FULFILLED:
      const nextState = [ ...state ];
      action.payload.map(product => {
        return nextState.push(product._id);
      });
      return nextState;
    default:
      return state;
  }
}

const products = combineReducers({
  allProductIds,
  productsById
})

export default products;

const getAllProducts = (state) => {
  state.allProductIds.map(id => state.productsById[id]);
}

export const getProducts = (state) => {
  const allProducts = getAllProducts(state);
  return allProducts;
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