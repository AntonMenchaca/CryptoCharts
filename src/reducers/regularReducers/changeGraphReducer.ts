import { Reducer, AnyAction } from 'redux';

var changeGraphReducer = (state= [], action: AnyAction) => {
  if (action.type === "CHANGE_GRAPH") {
    return action.payload;
  } else {
    return state;
  }
}

export default changeGraphReducer;