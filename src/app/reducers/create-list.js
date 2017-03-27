import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED
} from '../constants/product-constants';


const createList = (category, gender) => {
  console.log('createList gender', gender)
  console.log('createList category', category)
  return (state = [], action) => {
    if (action.category !== category || action.gender !== gender) {
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

export const createMensList = (category) => {
  return createList(category, 'mens');
}

export const createWomensList = (category) => {
  return createList(category, 'womens');
}

export default createList;

export const getIds = (state) => state;