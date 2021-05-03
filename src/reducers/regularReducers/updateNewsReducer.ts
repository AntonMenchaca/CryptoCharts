import { Reducer } from 'redux';

var updateNewsReducer: Reducer = (state=[], action) => {
  if (action.type === "UPDATE_NEWS") {
    return action.payload;
  } else {
    return state;
  }
}

export default updateNewsReducer;