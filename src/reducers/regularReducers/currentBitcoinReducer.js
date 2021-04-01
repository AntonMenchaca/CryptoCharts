import Redux from 'redux';

var currentBitcoinReducer = (state={}, action) => {
  if (action.type === "UPDATE_BITCOIN") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentBitcoinReducer;