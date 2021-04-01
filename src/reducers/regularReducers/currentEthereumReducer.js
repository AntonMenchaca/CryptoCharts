import Redux from 'redux';

var currentEthereumReducer = (state={}, action) => {
  if (action.type === "UPDATE_ETHEREUM") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentEthereumReducer;