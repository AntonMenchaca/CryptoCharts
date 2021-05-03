import { Reducer } from 'redux';

var currentBitcoinReducer: Reducer = (state={}, action) => {
  if (action.type === "UPDATE_BITCOIN") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentBitcoinReducer;