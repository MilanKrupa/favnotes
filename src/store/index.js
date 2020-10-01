import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

/* eslint-disable no-underscore-dangle */
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnchancers(applyMiddleware(thunk)),
);
/* eslint-enable */

export default store;
