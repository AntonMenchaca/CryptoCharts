import { Reducer, AnyAction } from 'redux';

var currentEthereumReducer = (state={}, action: AnyAction) => {
  if (action.type === "UPDATE_ETHEREUM") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentEthereumReducer;