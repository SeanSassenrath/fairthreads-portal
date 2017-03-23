import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/root-reducer';

export default configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(
      logger
    )
  )
}