import { createStore, applyMiddleware, compose } from 'redux';
import {  routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';

import rootReducer from './rootReducer';


export const history = createBrowserHistory();

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

if (process.env.ENV !== 'production') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer(history),
  composedEnhancers
);

export default store;
