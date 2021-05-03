import { Reducer } from 'redux';

var changeGraphReducer: Reducer = (state= [], action) => {
  if (action.type === "CHANGE_GRAPH") {
    return action.payload;
  } else {
    return state;
  }
}

export default changeGraphReducer;