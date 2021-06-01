import { combineReducers } from 'redux';
import getDataReducer from './regularReducers/getDataReducer';
import changeCoinReducer from './regularReducers/changeCoinReducer';
import updateNewsReducer from './regularReducers/updateNewsReducer';
import currentBitcoinReducer from './regularReducers/currentBitcoinReducer';
import currentLiteCoinReducer from './regularReducers/currentLiteCoinReducer';
import currentEthereumReducer from './regularReducers/currentEthereumReducer';
import currentRippleReducer from './regularReducers/currentRippleReducer';
import currentPageReducer from './regularReducers/currentPageReducer';

var rootReducer = combineReducers({
  currentData: getDataReducer,
  currentCoin: changeCoinReducer,
  news: updateNewsReducer,
  currentRipplePrice: currentRippleReducer,
  currentBitcoinPrice: currentBitcoinReducer,
  currentLiteCoinPrice: currentLiteCoinReducer,
  currentEthPrice: currentEthereumReducer,
  showNews: currentPageReducer
});

export default rootReducer;