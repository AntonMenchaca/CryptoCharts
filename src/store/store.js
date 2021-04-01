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
};

const store = createStore (
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);


export default store;
