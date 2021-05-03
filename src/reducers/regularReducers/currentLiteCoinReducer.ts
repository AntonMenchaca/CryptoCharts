import { Reducer } from 'redux';

var currentLiteCoinReducer: Reducer = (state={}, action) => {
  if (action.type === "UPDATE_LITECOIN") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentLiteCoinReducer;