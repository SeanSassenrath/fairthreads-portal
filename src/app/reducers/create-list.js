import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED
} from '../constants/product-constants';


const createList = (category) => {
  // console.log('createList gender', gender)
  console.log('createList category', category)
  return (state = [], action) => {
    if (action.category !== category) {
      console.log('action', action)
      console.log('action.category doesnt equal category', action.category !== category);
      return state;
    }
    switch (action.type) {
      case FETCH_PRODUCTS_FULFILLED:
        return action.response.map(product => product._id);
      default:
        return state;
    }
  }
}

export default createList;

export const getIds = (state) => state;