import Redux from 'redux';
import { Reducer, AnyAction } from 'redux';

var changeCoinReducer  = (state = 'Bitcoin', action: AnyAction) => {
  if (action.type === "CHANGE_NAME") {
    return action.payload;
  } else {
    return state;
  }
}

export default changeCoinReducer;