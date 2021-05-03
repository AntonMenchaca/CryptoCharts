import Redux from 'redux';
import { Reducer } from 'redux';

var changeCoinReducer: Reducer  = (state = 'Bitcoin', action) => {
  if (action.type === "CHANGE_NAME") {
    return action.payload;
  } else {
    return state;
  }
}

export default changeCoinReducer;