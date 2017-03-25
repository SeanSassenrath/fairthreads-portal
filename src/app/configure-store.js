import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/root-reducer';

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(
      logger
    )
  )
}

export default configureStore;