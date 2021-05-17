import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';


type NumbersArr = number[];

export interface State  {
  currentCoin: string;
  currentData: {
    price: NumbersArr[];
    volume: NumbersArr[];
    market_caps: NumbersArr[];
  };
  news: [];
  currentBitcoinPrice: Object;
  currentEthPrice: Object;
  currentLiteCoinPrice: Object;
  currentRipplePrice: Object;
}

var initialState: State = {
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

export type RootState = ReturnType<typeof store.getState>
export default store;
