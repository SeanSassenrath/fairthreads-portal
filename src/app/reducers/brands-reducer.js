import { set } from 'immutable-light';
import { combineReducers } from 'redux';
import createBrandList, * as fromList from './create-list';
import { values } from 'lodash';
import { 
  FETCH_BRANDS,
  FETCH_BRANDS_FULFILLED
} from '../constants/brand-constants';

const brandsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BRANDS:
      return state;
    case FETCH_BRANDS_FULFILLED:
      const nextState = { ...state };
      action.payload.forEach(brand => {
        nextState[brand._id] = brand;
      });
      return nextState;
    default:
      return state;
  }
};

export const getAllBrands = (state) => {
  const ids = fromList.getIds(state.brandLists.allBrands);
  return ids.map(id => state.brandsById[id]);
}

const brandLists = combineReducers({ allBrands: fromList.createBrandList() })

const brands = combineReducers({
  brandsById,
  brandLists
})

export default brands;