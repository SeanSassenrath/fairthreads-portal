import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import { rootEpic, rootReducer } from './reducers/root-reducer';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(
      epicMiddleware,
      logger
    )
  )
}

export default configureStore;