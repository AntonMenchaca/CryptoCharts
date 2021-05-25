import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers/rootReducer';
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



  export const store = createStore(persistedReducer, initialState,
    applyMiddleware(thunk));
export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>
