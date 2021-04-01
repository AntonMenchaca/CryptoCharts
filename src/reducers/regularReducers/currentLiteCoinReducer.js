import Redux from 'redux';

var currentLiteCoinReducer = (state={}, action) => {
  if (action.type === "UPDATE_LITECOIN") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentLiteCoinReducer;