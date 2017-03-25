import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import productsReducer from './products-reducer';
import { fetchProductsEpic } from '../actions/product-actions';

export const rootEpic = combineEpics(
  fetchProductsEpic
);

export const rootReducer = combineReducers({
  productsReducer
});