import { AnyAction } from 'redux';

var currentBitcoinReducer = (state={}, action: AnyAction) => {
  if (action.type === "UPDATE_BITCOIN") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentBitcoinReducer;