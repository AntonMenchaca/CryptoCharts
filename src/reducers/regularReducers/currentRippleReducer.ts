import { Reducer, AnyAction } from 'redux';

var currentRippleReducer = (state={}, action: AnyAction) => {
  if (action.type === "UPDATE_RIPPLE") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentRippleReducer;