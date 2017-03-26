import { set } from 'immutable-light';
import { 
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FULFILLED
} from '../constants/category-constants';

const initialState = {
  types: []
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      console.log('Fetching categories...')
      return state;
    case FETCH_CATEGORIES_FULFILLED:
      console.log('Categories received', action.payload);
      return set(state, 'types', action.payload);
    default:
      return state;
  }
}

export default categories;