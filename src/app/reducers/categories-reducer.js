import { set } from 'immutable-light';
import { combineReducers } from 'redux';
import createCategoryList, * as fromList from './create-list';
import { 
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FULFILLED
} from '../constants/category-constants';

// const initialState = {
//   types: []
// };

// const categories = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_CATEGORIES:
//       console.log('Fetching categories...')
//       return state;
//     case FETCH_CATEGORIES_FULFILLED:
//       console.log('Categories received', action.payload);
//       return set(state, 'types', action.payload);
//     default:
//       return state;
//   }
// }

const categoriesById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return state;
    case FETCH_CATEGORIES_FULFILLED:
      const nextState = { ...state };
      action.payload.forEach(category => {
        nextState[category._id] = category;
      });
      return nextState;
    default:
      return state;
  }
};

const categoriesByGender = combineReducers({
  womens: fromList.createCategoryList('womens'),
  mens: fromList.createCategoryList('mens')
})

const categories = combineReducers({
  categoriesById,
  categoriesByGender,
})

export const getCategoriesByGender = (state, gender) => {
  const ids = fromList.getIds(state.categoriesByGender[gender]);
  return ids.map(id => state.categoriesById[id]);
}

export default categories;