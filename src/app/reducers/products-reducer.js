import { 
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED
} from '../constants/product-constants';

const initialState = [
  { name: 'test1' }, { name: 'test2' }
]

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      console.log('Fetching products...')
      return state;
    case FETCH_PRODUCTS_FULFILLED:
      console.log('Products received', action.payload);
      return state;
    default:
      return state;
  }
}

export default productsReducer;