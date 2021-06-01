import { AnyAction } from 'redux';

var currentPageReducer = (state={}, action: AnyAction) => {
  if (action.type === "UPDATE_PAGE") {
    return action.payload;
  } else {
    return state;
  }
}

export default currentPageReducer;