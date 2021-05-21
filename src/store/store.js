import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers/rootReducer.js';
import storage from 'redux-persist/lib/storage';
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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


  export const store = createStore(persistedReducer,   initialState,
    applyMiddleware(thunk));

export const persistor = persistStore(store);


