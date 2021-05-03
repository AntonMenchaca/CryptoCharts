import { Reducer } from 'redux';

var currentEthereumReducer: Reducer = (state={}, action) => {
  if (action.type === "UPDATE_ETHEREUM") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentEthereumReducer;