import Redux from 'redux';

var getDataReducer = (state={}, action) => {
  if (action.type === "GET_DATA") {
    return action.payload;
  } else {
    return state;
  }
}

export default getDataReducer;