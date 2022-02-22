import { applyMiddleware, compose, createStore } from "redux";
// import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import reducers from "./reducers/index";
import rootSaga from './sagas/index';
import createSagaMiddleware from "redux-saga";
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
// const rootReducer = require('../reducers/index');
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState: any) {
  const store = createStore(reducers, initialState,
    composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  return { store };
}