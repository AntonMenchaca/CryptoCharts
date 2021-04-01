import { combineReducers } from 'redux';
import getDataReducer from './regularReducers/getDataReducer';
import changeCoinReducer from './regularReducers/changeCoinReducer';
import changeGraphReducer from './regularReducers/changeGraphReducer';
import updateNewsReducer from './regularReducers/updateNewsReducer';
import currentBitcoinReducer from './regularReducers/currentBitcoinReducer';
import currentLiteCoinReducer from './regularReducers/currentLiteCoinReducer';
import currentEthereumReducer from './regularReducers/currentEthereumReducer';
import currentRippleReducer from './regularReducers/currentRippleReducer';

var rootReducer = combineReducers({
  currentData: getDataReducer,
  currentCoin: changeCoinReducer,
  changeGraphType: changeGraphReducer,
  news: updateNewsReducer,
  currentRipplePrice: currentRippleReducer,
  currentBitcoinPrice: currentBitcoinReducer,
  currentLiteCoinPrice: currentLiteCoinReducer,
  currentEthPrice: currentEthereumReducer
});

export default rootReducer;