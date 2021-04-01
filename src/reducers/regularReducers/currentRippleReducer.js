import Redux from 'redux';

var currentRippleReducer = (state={}, action) => {
  if (action.type === "UPDATE_RIPPLE") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentRippleReducer;