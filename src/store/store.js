import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';

var initialState = {
  currentCoin: 'Bitcoin',
  currentData: {}
};

const store = createStore (
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

console.log(store.getState());
export default store;
