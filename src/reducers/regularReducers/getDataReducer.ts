import { Reducer } from 'redux';

var getDataReducer: Reducer = (state={}, action) => {
  if (action.type === "GET_DATA") {
    return action.payload;
  } else {
    return state;
  }
}

export default getDataReducer;