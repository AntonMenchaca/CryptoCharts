import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers/rootreducer';
import storage from 'redux-persist/lib/storage';
import {State} from '../type/State';


var initialState: State = {
  currentCoin: 'Bitcoin',
  currentData: {
    avgPrice: 0,
    highestDay: "",
    highestPrice: 0,
    lowestDay: "",
    lowestPrice: 0,
    price: [],
    volume: [],
    market_caps: [],
  },
  news: [],
  currentBitcoinPrice: {
    usd: 0,
    usd_24h_change: 0,
  },
  currentEthPrice: {
    usd: 0,
    usd_24h_change: 0,
  },
  currentLiteCoinPrice: {
    usd: 0,
    usd_24h_change: 0,
  },
  currentRipplePrice: {
    usd: 0,
    usd_24h_change: 0,
  },
  showNews: false
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



  export const store = createStore(persistedReducer, initialState,
    applyMiddleware(thunk));
export const persistor = persistStore(store);
