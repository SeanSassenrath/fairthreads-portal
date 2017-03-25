import { FETCH_PRODUCTS } from '../constants/product-constants';

const initialState = [
  { name: 'test1' }, { name: 'test2' }
]

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return state;
    default:
      return state;
  }
}

export default productsReducer;