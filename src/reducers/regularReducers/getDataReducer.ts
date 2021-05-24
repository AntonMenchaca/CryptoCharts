import { Reducer, AnyAction } from 'redux';

var getDataReducer = (state={}, action: AnyAction) => {
  if (action.type === "GET_DATA") {
    return action.payload;
  } else {
    return state;
  }
}

export default getDataReducer;