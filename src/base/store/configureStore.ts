import { createLogger } from 'redux-logger';
// @ts-ignore no definitions for this library
import reduxReqMiddleware from 'redux-req-middleware';
import { createStore, applyMiddleware, Store, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from 'base/types';
import { env } from '../shared/env';
import { rootReducer } from '../reducers';

export const configureStore = (initialState?: RootState): Store<RootState, Action> => {
  let middleware;
  if (env === 'development') {
    middleware = applyMiddleware(reduxReqMiddleware(), createLogger({ level: 'info', collapsed: true }));
    middleware = composeWithDevTools(middleware);
  } else {
    middleware = applyMiddleware(reduxReqMiddleware());
  }

  const store = createStore(rootReducer, initialState, middleware);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
