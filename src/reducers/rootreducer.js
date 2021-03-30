import { combineReducers } from 'redux';
import getDataReducer from './regularReducers/getDataReducer';
import changeCoinReducer from './regularReducers/changeCoinReducer';

var rootReducer = combineReducers({
  getData: getDataReducer,
  updateCoinName: changeCoinReducer
});

export default rootReducer;