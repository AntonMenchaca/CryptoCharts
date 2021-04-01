import Redux from 'redux';

var updateNewsReducer = (state=[], action) => {
  if (action.type === "UPDATE_NEWS") {
    return action.payload;
  } else {
    return state;
  }
}

export default updateNewsReducer;