import Redux from 'redux';

var changeGraphReducer = (state= [], action) => {
  if (action.type === "CHANGE_GRAPH") {
    return action.payload;
  } else {
    return state;
  }
}

export default changeGraphReducer;