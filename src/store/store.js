import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';

var initialState = {
  currentCoin: 'Bitcoin',
  currentData: {
    price: [],
    volume: [],
    market_caps: [],
  },
  news: [],
  currentBitcoinPrice: {},
  currentEthPrice: {},
  currentLiteCoinPrice: {},
  currentRipplePrice: {},
  changeGraphType: [],
  lowestPrice: 0,
  highestPrice: 0,
  highestDay: 0,
  lowestDay: 0,
  avgPrice: 0
};

const store = createStore (
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

console.log(store.getState());
export default store;
