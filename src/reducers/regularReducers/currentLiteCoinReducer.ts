import { Reducer, AnyAction } from 'redux';

var currentLiteCoinReducer = (state={}, action: AnyAction) => {
  if (action.type === "UPDATE_LITECOIN") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentLiteCoinReducer;