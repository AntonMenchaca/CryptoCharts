import { Reducer, AnyAction } from 'redux';

var updateNewsReducer = (state=[], action: AnyAction) => {
  if (action.type === "UPDATE_NEWS") {
    return action.payload;
  } else {
    return state;
  }
}

export default updateNewsReducer;