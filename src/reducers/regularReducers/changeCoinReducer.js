import Redux from 'redux';

var changeCoinReducer = (state= 'Bitcoin', action) => {
  if (action.type === "CHANGE_NAME") {
    return action.payload;
  } else {
    return state;
  }
}

export default changeCoinReducer;